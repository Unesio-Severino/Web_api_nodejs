echo '\n\n resquesting all heroes'
curl localhost:3000/heroes

echo '\n\n resquesting flash'
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"inavlid": "data"}' \
    localhost:3000/heroes 

echo '\n\n creating SuperBoy'
curl --silent -X POST \
    --data-binary '{"name": "Superboy", "age": 19, "hobbie": "Futebol"}' \
    localhost:3000/heroes

echo $CREATE

ID=$(echo $CREATE | jq .id)

echo '\n\n requesting superboy'
