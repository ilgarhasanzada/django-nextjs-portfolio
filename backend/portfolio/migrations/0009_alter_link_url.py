# Generated by Django 4.2 on 2023-04-10 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0008_link_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='link',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]