set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/curl.just" --list | zsh -c "$JUSTGREP"

#############  CURL  ##############

# curl example1
@c1:
  print "{{BrightMagenta}}curl example1"
  print -- "-----------{{BrightBlue}}"
  curl https://dummyjson.com/products | jq '.products[0]'

# curl example2
@c2:
  print "{{BrightMagenta}}curl example2"
  print -- "-----------{{BrightBlue}}"
  curl https://dummyjson.com/products/1 | jq

# curl example3
@c3:
  print "{{BrightMagenta}}curl example3"
  print -- "-----------{{BrightBlue}}"
  curl https://dummyjson.com/products | jq '.products[0] | keys'

# curl example4
@c4:
  print "{{BrightMagenta}}curl example4"
  print -- "-----------{{BrightBlue}}"
  curl https://dummyjson.com/products | jq '.products[0].price'

# curl example5
@c5:
  print "{{BrightMagenta}}curl example5"
  print -- "-----------{{BrightBlue}}"
  curl -O "$(curl https://dummyjson.com/products | jq -r '.products[0].meta.qrCode')"

# curl example6
@c6:
  print "{{BrightMagenta}}curl example6"
  print -- "-----------{{BrightBlue}}"
  curl -s https://dummyjson.com/products/categories | jq '.[0] | keys'
