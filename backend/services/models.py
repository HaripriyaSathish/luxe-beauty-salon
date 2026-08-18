from django.db import models


ICON_CHOICES = [
    ('scissors', 'Scissors (Hair)'),
    ('sparkles', 'Sparkles (Makeup)'),
    ('heart', 'Heart (Facials)'),
    ('award', 'Award (Nails)'),
    ('leaf', 'Leaf (Organic)'),
    ('calendar', 'Calendar (Packages)'),
    ('star', 'Star'),
    ('gem', 'Gem'),
]


class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    icon = models.CharField(max_length=30, choices=ICON_CHOICES, default='sparkles')
    order = models.PositiveIntegerField(default=0, help_text='Lower numbers appear first')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title

class GalleryImage(models.Model):
    image = models.ImageField(upload_to='gallery/')
    caption = models.CharField(max_length=150, blank=True, help_text='Shown on hover, e.g. "Glossy blow-dry and hair colour transformation"')
    order = models.PositiveIntegerField(default=0, help_text='Lower numbers appear first')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.caption or f'Gallery Image {self.id}'  

class Offer(models.Model):
    badge_text = models.CharField(max_length=50, help_text='e.g. "Save 25%", "Weekday Special", "First Visit"')
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    original_price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True, help_text='Leave blank if no discount to show')
    is_most_popular = models.BooleanField(default=False, help_text='Shows a "Most popular" ribbon on this card')
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title      

class Review(models.Model):
    RATING_CHOICES = [(i, str(i)) for i in range(1, 6)]

    client_name = models.CharField(max_length=100, help_text='e.g. "Priya S."')
    quote = models.TextField(max_length=400)
    rating = models.PositiveSmallIntegerField(choices=RATING_CHOICES, default=5)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f'{self.client_name} ({self.rating}★)'    