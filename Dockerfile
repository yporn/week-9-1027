FROM golang:1.21.3-bullseye
COPY main.go .
RUN go build ./main.go
ENTRYPOINT [ "./main" ]

