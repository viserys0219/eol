from django.test import TestCase
from modeling.models import Creature

class CreatrueModelTest(TestCase):
    def test_retrieving_items(self):
        Creature.objects.create(c_id="355488")
        first_item = Creature.objects.first()
        self.assertEqual(first_item.c_id, "355488")
