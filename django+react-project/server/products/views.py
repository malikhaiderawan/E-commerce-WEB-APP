from django.shortcuts import render
from .models import Product
from .serializers import Productserializer
from rest_framework import viewsets

# Create your views here.
class Product_view(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class = Productserializer
