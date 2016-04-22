package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	router.Static("/static", "./static")
	router.Run(":8080")
}
