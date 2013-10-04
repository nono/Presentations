!SLIDE
## Exemple avec du JSON ##

```go
var jsonBlob = []byte(`[
  {"Name": "Platypus", "Order": "Monotremata"},
  {"Name": "Quoll", "Order": "Dasyuromorphia"}
]`)

type Animal struct {
	Name  string
	Order string
}

var animals []Animal
err := json.Unmarshal(jsonBlob, &animals)
if err != nil {
	fmt.Println("error:", err)
}

fmt.Printf("%+v", animals)
```

!SLIDE
# Lire du JSON #

* `encoding/json` est fourni par la bibliothèque standard
* Mais ce n'est pas toujours pratique
* Des bibliothèque pour aider :
  * github.com/ChimeraCoder/gojson
  * github.com/jmoiron/jsonq

!SLIDE two_cols
## Exemple avec jsonq ##

```go
response, _ := http.Get(uri)
defer response.Body.Close()

body, _ := ioutil.ReadAll(response.Body)
resp := make(map[string]interface{})
json.Unmarshal(body, &resp)

jq := jsonq.NewQuery(resp)
```

```go
status, err := jq.String("status")
if err != nil {
  return
}

if status != "OK" {
  err = errors.New(status)
  return
}

lat, _ = jq.Float("result",
                  "geometry",
                  "location",
                  "lat")

lng, _ = jq.Float("result",
                  "geometry",
                  "location",
                  "lng")
```

!SLIDE two_cols
## Lire du XML ##

```go
data := []byte(`
<Person>
	<FullName>Grace R. Emlin</FullName>
	<Company>Example Inc.</Company>
	<Email where="home">
		<Addr>gre@example.com</Addr>
	</Email>
	<Group>
		<Value>Friends</Value>
		<Value>Squash</Value>
	</Group>
</Person>
`)
```

```go
type Email struct {
	Where string `xml:"where,attr"`
	Addr  string
}

type Result struct {
	Name    string   `xml:"FullName"`
	Email   []Email
	Groups  []string `xml:"Group>Value"`
}

result := Result{}

err := xml.Unmarshal(data, &result)
if err != nil {
	fmt.Printf("error: %v", err)
	return
}

fmt.Printf("%+v", result)
```

!SLIDE two_cols
# Alternative : gokogiri #

```go
response, err := http.Get(uri)
if err != nil {
  return
}
defer response.Body.Close()

data, _ := ioutil.ReadAll(response.Body)
doc, err := gokogiri.ParseXml(data)
if err != nil {
  return
}
defer doc.Free()
```

```go
costs, err := doc.Root().Search("Fare/Cost")
if err != nil {
  return
}

fare := 0.0
for _, cost := range costs {
  c, _ := strconv.ParseFloat(cost.Content(), 64)
  fare += c
}
```
