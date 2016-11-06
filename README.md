# thescienceofup

To create the proper image files:
ls | cat -n | while read n f; do mv "$f" "$n.jpg"; done
