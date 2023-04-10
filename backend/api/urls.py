from . import views
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register(r'about', views.AboutViewSet, basename='about')
router.register(r'skills', views.SkillViewSet, basename='skills')
router.register(r'education', views.EducationViewSet, basename='education')
router.register(r'experience', views.ExperienceViewSet, basename='experience')
router.register(r'portfolios', views.PortfolioViewSet, basename='portfolios')
router.register(r'categories', views.CategoryViewSet, basename='categories')
router.register(r'contact', views.ContactViewSet, basename='contact')
router.register(r'links', views.LinkViewSet, basename='links')

urlpatterns = [
    path("",include(router.urls)),
]