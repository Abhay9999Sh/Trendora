"use client"

import Link from "next/link"
import { useCart } from "../hooks/use-cart"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full px-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xl font-bold">Fake Store</span>
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

