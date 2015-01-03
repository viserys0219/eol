from django.test import TestCase
from modeling.models import Creature
from django.http import HttpRequest
from modeling.views import results

class CreatrueModelTest(TestCase):
    def test_retrieving_items(self):
        Creature.objects.create(c_id="355488")
        first_item = Creature.objects.first()
        self.assertEqual(first_item.c_id, "355488")

    
    def test_search_results(self):
        Creature.objects.create(c_id="1052550")
        # because in test environment,
        # the test db is empty, so we have to create a record for test
        request = HttpRequest()
        request.method = 'POST'
        request.POST['item_text'] = "1052550"
        response = results(request)
        self.assertIn("1052550", response.content.decode())
