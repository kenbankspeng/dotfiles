GET https://dummyjson.com/products/1
HTTP 200
[Asserts]
jsonpath "$.title" == "Essence Mascara Lash Princess"
