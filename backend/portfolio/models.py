from django.db import models

class About(models.Model):

    GENDER = [
        ('Male', 'Male'),
        ('Female', 'Female')
    ]
    photo = models.ImageField(upload_to = 'images')
    name = models.CharField(max_length = 100)
    surname = models.CharField(max_length = 100)
    job = models.CharField(max_length = 100)
    description = models.TextField()
    country = models.CharField(max_length=100)
    lives = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length = 100,choices=GENDER)
    cv = models.FileField(upload_to = 'cv')
    gmail = models.EmailField(null = True)
    phone = models.CharField(max_length = 50, null = True)

    
    def __str__(self) -> str:
        return f'{self.name} {self.surname}'
    
class Skill(models.Model):
    title = models.TextField(max_length = 50)
    
    def __str__(self) -> str:
        return self.title
    
class Experience(models.Model):
    start_year = models.DateField()
    graduate_year = models.DateField(blank = True, null = True)
    job = models.CharField(max_length = 100)
    workplace = models.CharField(max_length = 100)
    description = models.TextField()
    def __str__(self) -> str:
        return f'{self.job} -- {self.workplace}'
    
class Education(models.Model):
    start_year = models.DateField()
    graduate_year = models.DateField(blank = True, null = True)
    faculty = models.CharField(max_length = 100)
    university = models.CharField(max_length = 100)
    description = models.TextField()
    def __str__(self) -> str:
        return f'{self.faculty} -- {self.university}'
    

class Tag(models.Model):
    title = models.CharField(max_length = 50)
    def __str__(self) -> str:
        return self.title
    
class Category(models.Model):
    title = models.CharField(max_length = 50)
    def __str__(self) -> str:
        return self.title

class Portfolio(models.Model):
    title = models.CharField(max_length = 100)
    image = models.ImageField("portofolios")
    category = models.ForeignKey(Category, on_delete = models.SET_NULL, null = True, blank = True)
    tags = models.ManyToManyField(Tag, related_name = 'portfolios')
    link = models.URLField(null = True, blank = True)

    def __str__(self) -> str:
        return self.title
    
class Contact(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField(max_length = 100)
    subject = models.CharField(max_length = 100)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add = True)

    def __str__(self) -> str:
        return f'{self.name} -- {self.email}'
    
class Link(models.Model):
    title = models.CharField(max_length = 100)
    url = models.URLField(null = True, blank = True)
    def __str__(self) -> str:
        return self.title