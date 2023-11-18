package main

import (
	"fmt"
	"log"
	"net/http"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello Jumpbox!")
	fmt.Println("Endpoint Hit: / Path")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	fmt.Println("Application Running...")
	log.Fatal(http.ListenAndServe(":8081", nil))
}

func main() {
	handleRequests()
}
