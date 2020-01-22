#
# POSAPPS BACKEND

POSApp (Point Of Sales) adalah aplikasi sederhana yang dapat digunakan untuk mengontrol input dan output barang atau pesanan, secara umum POS App memiliki detail barang dan detail transaksi. Dalam hal ini POSApp dibuat untuk pemesanan dan transaksi dalam sebuah rumah makan dan yang menjadi user adalah kasir perusahaan.


# Cara Pemakaian

```javascript
 - git clone : https://github.com/ragasukmana/Posapps.backend.git
 - cd Posapps.backend //open directory
 - xampp install //mysql server start
 - yarn install	//install depedencies
 - yarnstart //start server
```

## Dokumentasi Folder
Directory
```javascript
 - controller directory path = Posapps.backend\src\controller
 - models directory path = Posapps.backend\src\models
 - routes directory path =  Posapps.backend\src\routes
 - middleware directory path = Posapps.backend\src\middleware
 - helper directory path =  Posapps.backend\src\helper
 - config directory path = Posapps.backend\src\config
```
File
```
 - index file path = Posapps.backend\src
 - mysql file path = Posapps.backend\src\config
 - details_order file path = Posapps.backend\src\routes
 - products file path = Posapps.backend\src\routes
 - category file path = Posapps.backend\src\routes
 - detail_order file path = Posapps.backend\src\models
 - products file path = Posapps.backend\src\models
 - category file path = Posapps.backend\src\models
 - detail_order file path = Posapps.backend\src\controller
 - products file path = Posapps.backend\src\controller
 - category file path = Posapps.backend\src\controller
 - index file path = Posapps.backend\src\helper
```

# Dokumentasi API

**STARTED**	
`` server start:`` ``yarn start``
`` localhost: 127.0.0.1:3001``
``header:`` ``application/x-www-form-urlencoded``
or
``Content-Type:`` ``application/x-www-form-urlencoded``
``install postman`` 

#
## **PRODUCT**

**GET** (*Menampilkan data*)
``` javascript
GET 127.0.0.1:3001/products
```

**Response from postman**
```javascript
"status":  200,
"data":  [
	{
		"id":  67,
		"name":  "Hot choco",
		"description":  "Coklat Enak dan 		asli terbuat dari bahan terbaik alami 					yang kami pilih sendiri",
		"image":  "pictures\\1579519511221hot choco.jpg",
		"category":  2,
		"price":  12000,
		"dateadd":  "2020-01-20T00:24:41.000Z",
		"dateupdate":  "2020-01-22T09:09:20.000Z"
	},
	{
		"id":  68,
		"name":  "AYAM RICA",
		"description":  "Ayam Rica dengan bumbu rempah dan sambal rica rica khas resto kami yang enak",
		"image":  "pictures\\1579479929787ayam rica.jpg",
		"category":  1,
		"price":  20000,
		"dateadd":  "2020-01-20T00:25:29.000Z",
		"dateupdate":  "2020-01-20T16:07:28.000Z"
	 }
 ]
```
**POST (*Buat data baru* )**
```javascript
POST 127.0.0.1:3001/products/
```
```javascript
{
	"status":  200,
	"data":  {
	"id":  82,
	"name":  "Ikan Bakaran",
	"description":  "Ikan bakar dengan bumbu special dan sambal kecap ",
	"image":  "pictures\\1579716159345ikanbakar.jpg",
	"category":  "1",
	"price":  "35000"
}
```
**PUT (*Edit Data dengan id*)**
```javascript
PUT 127.0.0.1:3001/products/:id
```
**Delete** ***(Hapus data dengan id)***
```javascript
DELETE 127.0.0.1:3001/products/:id
```
**Sorting**
````javascript
GET
127.0.0.1:3001/products?sortby=id DESC/ASC
````
**Search** (search by name product)
````javascript
GET
127.0.0.1:3001/products?name=ayam
````
**Filter** (Filter by category)
````javascript
GET
127.0.0.1:3001/products?category=1
````
**Pagination**
````javascript
GET
127.0.0.1:3001/products?page=2&limit=3
````
#
## CATEGORY

**GET** 
````javascript
GET 127.0.0.1:3001/category/
````

**RESPONSE**
````
{
	"status":  200,
	"data":  
	[
		{
			"id":  1,
			"name":  "Food",
			"dateadd":  "2020-01-18T08:24:01.000Z",
			"dateupdate":  "2020-01-18T08:24:01.000Z"
		},
		{
			"id":  2,
			"name":  "Drink",
			"dateadd":  "2020-01-18T08:24:01.000Z",
			"dateupdate":  "2020-01-18T08:24:01.000Z"
		}
	]

}
````

**POST** 
````javascript
POST 127.0.0.1:3001/category/
````

**PUT**
````javascript
PUT 127.0.0.1:3001/category/:id
````

**DELETE**
````javascript
DELETE 127.0.0.1:3001/category/6
````
#
## ORDER

**GET POST ORDER**
````javascript
GET 127.0.0.1:3001/order/postorder
````

**RESPONSE**
````javascript
{
	"status":  200,
	"data":  [
		{
			"id":  229,
			"order_reff":  "959108",
			"cashier":  1,
			"total_price":  87000,
				"add_date":  "2020-01-22T14:34:05.000Z",
			"update_date":  "2020-01-22T14:34:05.000Z"
		},
		{
			"id":  230,
			"order_reff":  "113052",
			"cashier":  1,
			"total_price":  87000,
			"add_date":  "2020-01-22T14:35:56.000Z",
			"update_date":  "2020-01-22T14:35:56.000Z"
},
````
**GET ORDER**
````javascript
GET 127.0.0.1:3001/order/
````
**RESPONSE**
````javascript
{
	"status":  200,
	"data":  [
		{
			"id":  243,
			"id_product":  68,
			"order_id":  229,
			"quantity":  3,
			"price":  20000,
			"payment":  2,
			"created_date":  "2020-01-22T14:34:05.000Z",
			"update_date":  "2020-01-22T14:34:05.000Z"
		},
		{

			"id":  244,
			"id_product":  72,
			"order_id":  230,
			"quantity":  3,
			"price":  9000,
			"payment":  3,
			"created_date":  "2020-01-22T14:35:56.000Z",
			"update_date":  "2020-01-22T14:35:56.000Z"
		}
	]
}
````

**POST ORDER**
````javascript
POST 127.0.0.1:3001/order/
````
**INPUT BODY RAW**
```` javascript
{
    "user_id": 1,
    "order": [
        {
            "id_product": 67,
            "quantity": 10,
            "payment": 1
        },
        {
        	"id_product": 78,
            "quantity": 3,
            "payment": 3
        }
    ]
}
````
**DELETE ORDER**
````javascript
DELETE 127.0.0.1:3001/order/242
````


