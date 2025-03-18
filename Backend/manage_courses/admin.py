from django.contrib import admin
from .models import Course, Module, Lesson


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'instructor', 'category', 'price', 'status', 'created_at', 'rating_avg')
    search_fields = ('title', 'instructor__username', 'category')
    list_filter = ('status', 'category', 'difficulty')
    readonly_fields = ('rating_avg',)

@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'position')
    search_fields = ('title', 'course__title')
    list_filter = ('course',)

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'module', 'position')
    search_fields = ('title', 'module__title')
    list_filter = ('module',)

