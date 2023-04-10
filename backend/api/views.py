from portfolio import models
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from . import serilaizers

class AboutViewSet(ModelViewSet):
    queryset = models.About.objects.all()
    serializer_class = serilaizers.AboutSerializer

class SkillViewSet(ModelViewSet):
    queryset = models.Skill.objects.all()
    serializer_class = serilaizers.SkillSerializer

class EducationViewSet(ModelViewSet):
    queryset = models.Education.objects.all()
    serializer_class = serilaizers.EducationSerializer

class ExperienceViewSet(ModelViewSet):
    queryset = models.Experience.objects.all()
    serializer_class = serilaizers.ExperienceSerializer

class PortfolioViewSet(ModelViewSet):
    queryset = models.Portfolio.objects.all()
    serializer_class = serilaizers.PortfolioSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category',]

class CategoryViewSet(ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serilaizers.CategorySerializer

class ContactViewSet(ModelViewSet):
    queryset = models.Contact.objects.all()
    serializer_class = serilaizers.ContactSerializer

class LinkViewSet(ModelViewSet):
    queryset = models.Link.objects.all()
    serializer_class = serilaizers.LinkSerializer