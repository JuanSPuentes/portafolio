# Generated by Django 4.0.7 on 2022-12-19 18:00

import apps.portafolio.models
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('portafolio_uuid', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('tag', models.CharField(max_length=50, verbose_name='Project Tag')),
            ],
        ),
        migrations.CreateModel(
            name='Portafolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('portafolio_uuid', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('title', models.CharField(max_length=100, verbose_name='Title Project')),
                ('description', models.TextField(max_length=250, verbose_name='Description Project')),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to=apps.portafolio.models.portafolio_directory_path, verbose_name='Image Project')),
                ('urlgit', models.URLField(blank=True, max_length=100, null=True, verbose_name='Url Github')),
                ('url', models.URLField(blank=True, max_length=100, null=True, verbose_name='Url Web Site')),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=50, verbose_name='Status Project')),
                ('published', models.DateTimeField(auto_now_add=True)),
                ('tag', models.ManyToManyField(to='portafolio.tag', verbose_name='Tags Project')),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
    ]
