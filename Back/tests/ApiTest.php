<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Service\RickAndMortyGestion;
use App\Entity\Product;
use App\Entity\Cart;

class ApiTest extends WebTestCase
{
    public function testApiAddition(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('GET', '/api/');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['message' => "Hello world"], $responseData);
    }

    private $product;
    private $id;
    public function testProductSaved(): void
    {
        $this->product = new Product();
        $this->product->setName('Rick');
        $this->product->setPrice('8');
        $this->product->setQuantity('2');
        $this->product->setImage('https:\/\/rickandmortyapi.com\/api\/character\/avatar\/19.jpeg');
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', '/api/products',
        [   'name' => $this->product->getName(),
            "price"=> $this->product->getPrice(),
            "quantity"=> $this->product->getQuantity(),
            "image"=> $this->product->getImage() ]
        );
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->id = $responseData['id'];
        $this->assertEquals($responseData['name'], $this->product->getName());
    }

    private $products;
    public function testCartSaved(): void
    {
        $this->products = new Cart();

        $this->assertEquals($this->products->getId('0'), $this->products->getId());
    }

    public function testHH(): void
    {
        
    }
}

