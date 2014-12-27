from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'modeling.views.home_page', name="home"),
    url(r'^add/$', 'modeling.views.add_to_db', name="add"),
    url(r'^rewrite/$', 'modeling.views.re_write', name="rewrite"),
    url(r'^result$', 'modeling.views.results', name="results"),
    url(r'^location/$', 'modeling.views.location', name='lcation'),
    url(r'^location_detail$', 'modeling.views.location_detail', name='location_detail'),
    # Examples:
    # url(r'^$', 'eol.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
