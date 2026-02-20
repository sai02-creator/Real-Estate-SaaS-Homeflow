import { ArrowRight, Home, MapPin, Search } from "lucide-react";

import Link from "next/link";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sanityFetch } from "@/lib/sanity/live";
import { FEATURED_PROPERTIES_QUERY } from "@/lib/sanity/queries";

const CONTAINER = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export default async function HomePage() {
  const { data: featuredProperties } = await sanityFetch({
    query: FEATURED_PROPERTIES_QUERY,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent via-accent/50 to-background py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className={`${CONTAINER} relative`}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Home className="h-4 w-4" aria-hidden="true" />
              <span>Perfect for First-Time Buyers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
              Find Your <span className="text-primary">Perfect Nest</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Making your first home journey simple and stress-free. Browse
              curated properties, save your favorites, and connect with trusted
              agents.
            </p>

            <form
              action="/properties"
              method="GET"
              className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            >
              <div className="flex-1 relative">
                <label htmlFor="city-search" className="sr-only">
                  Search by city, neighborhood, or ZIP code
                </label>
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  id="city-search"
                  name="city"
                  placeholder="Enter city, neighborhood, or ZIP…"
                  autoComplete="address-level2"
                  className="h-14 pl-12 text-base"
                />
              </div>
              <Button type="submit" size="xl" className="h-14">
                <Search className="h-5 w-5" aria-hidden="true" />
                <span className="ml-2">Search Properties</span>
              </Button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span>1,000+ Active Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>500+ Happy Homeowners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>50+ Trusted Agents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 md:py-28">
        <div className={CONTAINER}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Featured Properties
              </h2>
              <p className="text-muted-foreground mt-2">
                Hand-picked homes curated just for you
              </p>
            </div>
            <Button variant="outline" asChild className="w-fit">
              <Link href="/properties">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {featuredProperties && featuredProperties.length > 0 ? (
            <PropertyGrid properties={featuredProperties} />
          ) : (
            <div className="text-center py-16 bg-accent/50 rounded-2xl border border-border/50">
              <Home className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No featured properties available at the moment.
              </p>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/properties">Browse All Properties</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-accent/30">
        <div className={CONTAINER}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              How Homeflow Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Finding your first home has never been easier. Follow these simple
              steps to start your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-28">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
                Why Choose Homeflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Built for First-Time Homebuyers
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that buying your first home can be overwhelming.
                That&apos;s why we&apos;ve designed Homeflow to make the process
                as simple and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
