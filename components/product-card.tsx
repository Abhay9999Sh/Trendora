"use client"

import type { Product } from "../types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative pt-4 px-4 flex items-center justify-center bg-muted/20 h-[200px]">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain max-h-[150px]"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-medium line-clamp-2">{product.title}</h3>
          <Badge variant="outline" className="whitespace-nowrap">
            ${product.price.toFixed(2)}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span>{product.rating.rate}</span>
          <span className="text-xs">({product.rating.count} reviews)</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={onAddToCart} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

