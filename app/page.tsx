import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Workforce Solutions + Vocational Rehabilitation Services
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Guiding job seekers with disabilities prepare for, find, and keep employment
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/interest-form">Start My VR Interest Form</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <img
                  src="/placeholder.svg?height=550&width=550"
                  alt="People in a workplace setting"
                  className="rounded-lg object-cover"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Can Help</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our services are designed to guide people with disabilities achieve their employment goals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Vocational Assessment</h3>
                <p className="text-center text-muted-foreground">
                  Identify your strengths, abilities, and interests to find the right career path
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Job Placement</h3>
                <p className="text-center text-muted-foreground">
                  Get resources finding and applying for jobs that match your skills and accommodations
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 3v12" />
                    <path d="m8 11 4 4 4-4" />
                    <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Training & Education</h3>
                <p className="text-center text-muted-foreground">
                  Access training programs and educational opportunities to build your skills
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link href="/interest-form">Start My VR Interest Form</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
