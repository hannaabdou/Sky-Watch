from textwrap import dedent
import urllib.parse
import re

x_intent = "https://x.com/intent/tweet"
fb_sharer = "https://www.facebook.com/sharer/sharer.php"
in_share = "https://www.linkedin.com/shareArticle"
include = re.compile(r"blog/[1-9].*")

def on_page_markdown(markdown, **kwargs):
    page = kwargs['page']
    config = kwargs['config']
    if not include.match(page.url):
        return markdown

    page_url = config.site_url + page.url
    page_title = urllib.parse.quote(page.title)

    return markdown + dedent(f"""
    <a href="https://x.com/intent/tweet?text={page_title}&url={urllib.parse.quote(page_url)}" target="_blank" class="md-button">
        <i class="fab fa-twitter" style="margin-right: 5px;"></i> Share on Twitter
    </a>
    <a href="https://www.facebook.com/sharer/sharer.php?u={urllib.parse.quote(page_url)}" target="_blank" class="md-button">
        <i class="fab fa-facebook" style="margin-right: 5px;"></i> Share on Facebook
    </a>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url={urllib.parse.quote(page_url)}&title={page_title}" target="_blank" class="md-button">
        <i class="fab fa-linkedin" style="margin-right: 5px;"></i> Share on LinkedIn
    </a>
    """)
