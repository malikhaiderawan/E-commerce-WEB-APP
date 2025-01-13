from django.db import models

class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images', null= False, blank=False)
    name = models.CharField(max_length=50 , blank= False , null= False)
    price = models.DecimalField( max_digits=5, decimal_places=2 , null = False, blank = False)
    description = models.TextField()
    category = models.CharField( max_length=50, null = True , blank = True)
    created_at = models.DateTimeField( auto_now=True,)

    def __str__(self):
        return self.name




