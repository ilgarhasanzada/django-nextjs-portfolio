from portfolio import models
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

class AboutSerializer(ModelSerializer):
    class Meta:
        model = models.About
        fields = '__all__'

class EducationSerializer(ModelSerializer):
    class Meta:
        model = models.Education
        fields = '__all__'

class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = models.Experience
        fields = '__all__'

class SkillSerializer(ModelSerializer):
    class Meta:
        model = models.Skill
        fields = '__all__'

class TagSerializer(ModelSerializer):
    class Meta:
        model = models.Tag
        fields = '__all__'

class PortfolioSerializer(ModelSerializer):
    tags = TagSerializer(many = True)
    category = serializers.StringRelatedField()
    class Meta:
        model = models.Portfolio
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

class ContactSerializer(ModelSerializer):
    class Meta:
        model = models.Contact
        fields = '__all__'
        
class LinkSerializer(ModelSerializer):
    class Meta:
        model = models.Link
        fields = '__all__'