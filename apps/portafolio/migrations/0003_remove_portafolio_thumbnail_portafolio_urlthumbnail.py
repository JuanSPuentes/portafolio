# Generated by Django 4.0.7 on 2022-12-27 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portafolio', '0002_rename_portafolio_uuid_tag_tag_uuid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portafolio',
            name='thumbnail',
        ),
        migrations.AddField(
            model_name='portafolio',
            name='urlthumbnail',
            field=models.URLField(blank=True, max_length=100, null=True, verbose_name='Image Project'),
        ),
    ]
