from django.db import models
import uuid


def portafolio_directory_path(instance, filename):
    return 'portafolio/{}/{}'.format(instance.title, filename)


class Tag(models.Model):
    tag_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    tag = models.CharField(verbose_name='Project Tag', max_length=50)
 

    def __str__(self):
        return self.tag
    

class Portafolio(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status = 'published')

    options=(
        ('draft', 'Draft'),
        ('published', 'Published')
    )

    portafolio_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    title = models.CharField(verbose_name='Title Project', max_length=100)
    description = models.TextField(verbose_name='Description Project', max_length=250)
    urlthumbnail = models.URLField(verbose_name='Image Project', max_length=100, blank=True, null=True)
    tag = models.ManyToManyField(Tag, verbose_name="Tags Project")
    urlgit = models.URLField(verbose_name='Url Github', max_length=100, blank=True, null=True)
    url = models.URLField(verbose_name='Url Web Site', max_length=100, blank=True, null=True)
    status = models.CharField(verbose_name='Status Project', choices=options, default='draft', max_length=50)
    published = models.DateTimeField(auto_now_add=True, auto_now=False)
    objects = models.Manager() #default manager
    postobjects = PostObjects() #custom manager
    

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title


