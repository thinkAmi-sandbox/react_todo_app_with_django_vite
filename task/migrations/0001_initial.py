# Generated by Django 4.1.3 on 2022-11-28 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=255, verbose_name='内容')),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
