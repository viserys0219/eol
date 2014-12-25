from django.shortcuts import render
from django.http import HttpResponse
from modeling.models import Creature
def home_page(request):
    return HttpResponse("<html><title>EOL homepage</title></html>")

def add_to_db(request):
    with open("baseLine_75380.txt") as f:
        for records in f:
            c_id, s_name, c_name, category, iucn_level, level, location,\
                  location_number, location_style = records.strip().split('_')
            Creature.objects.create(
                c_id=c_id,
                s_name=s_name,
                c_name=c_name,
                category=category,
                iucn_level=iucn_level,
                level=level,
                location=location,
                location_number=location_number,
                location_style=location_style,
            )
        return HttpResponse("<html><title>EOL homepage</title></html>")
