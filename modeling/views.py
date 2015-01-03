from django.shortcuts import render
from django.http import HttpResponse
from modeling.models import Creature
from django.db.models import Q
import json

def home_page(request):
    return render(request, "search.html")

def add_to_db(request):
    with open("rewrite.txt") as f:
        f1 = open("temp2.txt", "w")
        for records in f:
            c_id, s_name, c_name, category, iucn_level, level, location,\
                  location_number, location_style = records.strip().split('_')[0:9]
            try:
                Creature.objects.create(
                    c_id=c_id,
                    s_name=s_name,
                    c_name=c_name,
                    category=category,
                    iucn_level=iucn_level,
                    level=level,
                    location=location,
                    location_number=location_number,
                    location_style=location_style
                )
                f1.write(records)
            except:
                print("duplicate :", c_id)
        f1.close()
        return HttpResponse("<html><title>EOL homepage</title><body>insert complete"\
                            "</body></html>")

def re_write(request):
    f1 = open("rewrite.txt", "w")
    with open("baseLine.txt") as f:
        for i in f:
            f1.write(i.strip()+'\n')
    f1.close()
    return HttpResponse("<html><title>EOL homepage</title><body>"\
                        "rewrite complete</body></html>")

def results(request):
    creature = Creature.objects.filter(c_id=request.POST['item_text'])
    return render(request, "location-detail.html", {"Creature":creature})

def location(request):
    return render(request, "slice.html")

def creature_search(loc):
    creature = Creature.objects.filter(Q(location__icontains="9999"))
    for i in loc:
        print(Creature.objects.filter(location__icontains=i).count())
        creature = creature|Creature.objects.filter(location__icontains=i)
        # Use | to combine two QuerySets
    pages = creature.count()
    return creature, pages

def location_detail(request):
    loc = request.POST['locations'].split(',')[:-1]
    creature, pages = creature_search(loc)
    return render(request, "location-detail.html", {"Creature":creature[0:5],
                                                    "pages":range(1, int(pages/5)+2),
                                                    "current":1,
                                                    "loc":request.POST['locations']})

def page(request, num):
    loc = request.GET['locations'].split(',')[:-1]
    creature, pages = creature_search(loc)
    page_start = (int(num) - 1) * 5
    return render(request, "location-detail.html", {"Creature":creature[page_start:page_start+5],
                                                    "pages":range(1, int(pages/5)+2),
                                                    "current":int(num),
                                                    "loc":request.GET['locations']})

def auto(request):
    item_text = request.GET['item_text']
    response_data = Creature.objects.filter(c_name__startswith=item_text)
    list1 = [x.c_name for x in response_data]
    return HttpResponse(json.dumps(list1), content_type="application/json")


