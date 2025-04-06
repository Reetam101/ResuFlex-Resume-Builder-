"use client"

import logo from "@/assets/logo.png"
import preview from "@/assets/preview.png"
import { premiumFeatures, premiumPlusFeatures } from "@/components/premium/PremiumModal";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { scrollToSection } from "@/lib/utils";
import { useAuth, UserButton } from "@clerk/nextjs";
import { 
  Rocket, 
  Sparkles, 
  LayoutTemplate, 
  Download, 
  Lock, 
  Check, 
  ArrowRight,
  FileText,
  ShieldCheck,
  Zap,
  Users,
  Mail,
  HelpCircle,
  BookOpen,
  Briefcase,
  Menu,
  X,
  CreditCard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const {isSignedIn } = useAuth()
 const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b bg-slate-100">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <Rocket className="h-6 w-6 text-[#867cb3]" /> */}
          {/* <span className="text-xl font-bold text-[#867cb3]">ResuFlex</span> */}
          <Image
          src={logo}
          alt="logo"
          width={70} 
          height={70}
          // className="rounded-full"
        />
        <span className="text-xl font-bold tracking-tight">
          <span style={{
            color: "#dc4f50"
          }}>R</span><span style={{
            color: "#439751"
          }}>esu</span><span style={{
            color: "#867cb3",
            fontStyle: "italic"
          }}>Flex</span>
        </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 px-6">
          <Button variant="ghost" className="text-gray-700 hover:text-[#867cb3]" onClick={() => router.push("/tos")}>Terms of Services</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-[#867cb3]" onClick={() => scrollToSection('features')}>Features</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-[#867cb3]" onClick={() => scrollToSection('pricing')}>Pricing</Button>
          {/* <Button variant="ghost" className="text-gray-700 hover:text-[#867cb3]">Templates</Button> */}
          <Button variant="ghost" className="text-gray-700 hover:text-[#867cb3] relative group">
  Templates
  <span className="absolute -top-2 -right-2 bg-[#fff3cd] text-[#856404] text-[0.65rem] font-medium px-1.5 py-0.5 rounded-full border border-[#ffeeba] shadow-sm">
    Coming Soon
  </span>
  <span className="sr-only">(Feature coming soon)</span>
</Button>
          {
            isSignedIn ? (
              <div className="flex items-center gap-3">
                    <UserButton 
                      appearance={{
                        // baseTheme: theme === "dark" ? dark : undefined,
                        elements: {
                          avatarBox: {
                            width: 35,
                            height: 35
                          }
                        }
                      }}
                    >
                      <UserButton.MenuItems>
                        <UserButton.Link 
                          label="Billing"
                          labelIcon={<CreditCard className="size-4" />}
                          href="/billing"
                        />
                      </UserButton.MenuItems>
              
                    </UserButton>
                    </div>
            ) : (
              <div className="flex space-x-2">
            <Button asChild variant="outline">
            <Link href="/sign-in" >
              Sign In
              </Link>
              </Button>
            <Button asChild className="bg-[#867cb3] hover:bg-[#756aa3]">
            <Link href="/sign-up">
              
              Sign Up
              </Link>
              </Button>
          </div>
            )
          }
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start">Features</Button>
            <Button variant="ghost" className="w-full justify-start">Pricing</Button>
            <Button variant="ghost" className="w-full justify-start">Templates</Button>
            <div className="pt-2 space-y-2 border-t">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-[#867cb3] hover:bg-[#756aa3]">Sign Up</Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Build Your Perfect <span className="text-[#867cb3]">Resume</span> in Minutes
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Create professional resumes that get you hired with our easy-to-use resume builder.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-[#867cb3] hover:bg-[#756aa3] px-6 sm:px-8">
            Get Started - It's Free
          </Button>
          <Button size="lg" variant="outline" className="px-6 sm:px-8 relative">
            <span className="absolute -top-2 -right-2 bg-[#fff3cd] text-[#856404] text-[0.65rem] font-medium px-1.5 py-0.5 rounded-full border border-[#ffeeba] shadow-sm">Coming soon</span>
            See Templates
          </Button>
        </div>
        {/* <div className="mt-12 sm:mt-16 rounded-xl border shadow-lg overflow-hidden max-w-4xl mx-auto"> */}
          <div className="mt-12 sm:h-96 flex items-center justify-center">
            <Image 
              src={preview}
              width={300}
              height={100}
              alt="Resume Preview"
              className="rounded-sm shadow-lg"
            />
          </div>
        {/* </div> */}
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Everything you need to create a resume that stands out
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <div className="bg-[#f0eefb] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <LayoutTemplate className="h-6 w-6 text-[#867cb3]" />
                </div>
                <CardTitle>Professional Templates</CardTitle>
                <CardDescription>Choose from dozens of designer-crafted templates</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-[#f0eefb] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-[#867cb3]" />
                </div>
                <CardTitle>ATS Optimization</CardTitle>
                <CardDescription>Resumes optimized for applicant tracking systems</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-[#f0eefb] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-[#867cb3]" />
                </div>
                <CardTitle>PDF Format</CardTitle>
                <CardDescription>Download as PDF file</CardDescription>
              </CardHeader>
            </Card>

            {/* <Card>
              <CardHeader>
                <div className="bg-[#f0eefb] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-[#867cb3]" />
                </div>
                <CardTitle>Download Option</CardTitle>
                <CardDescription>Save and access your resumes as PDF</CardDescription>
              </CardHeader>
            </Card> */}

            {/* <Card>
              <CardHeader>
                <div className="bg-[#f0eefb] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-[#867cb3]" />
                </div>
                <CardTitle>Content Suggestions</CardTitle>
                <CardDescription>AI-powered suggestions to improve your resume</CardDescription>
              </CardHeader>
            </Card> */}
{/* 
            <Card>
              <CardHeader>
                <div className="bg-[#f0eefb] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#867cb3]" />
                </div>
                <CardTitle>Quick Apply</CardTitle>
                <CardDescription>One-click apply to jobs with your resume</CardDescription>
              </CardHeader>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-20 bg-[#f8f7fc]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Choose ResuFlex?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-[#867cb3] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Easy to Use</h3>
                    <p className="text-gray-600">Intuitive interface that guides you through the process</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-[#867cb3] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Time Saving</h3>
                    <p className="text-gray-600">Create a professional resume in 15 minutes or less</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-[#867cb3] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Proven Results</h3>
                    <p className="text-gray-600">Users report 3x more interview invitations</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="bg-gray-50 h-64 rounded-lg flex flex-col items-center justify-center p-6">
                <Users className="h-12 w-12 text-[#867cb3] mb-4" />
                <p className="text-gray-700 text-center">
                  "ResuFlex helped me create a professional resume that landed me interviews at top tech companies."
                </p>
                <p className="text-gray-900 font-medium mt-4">- Sarah Johnson, Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">₹199</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {
                    premiumFeatures.map((feat) => (
                      <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>{feat}</span>
                  </li>
                    ))
                  }
                  
                  {/* <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Basic Templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>PDF Download</span>
                  </li> */}
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#867cb3] relative">
              <div className="absolute top-0 right-0 bg-[#867cb3] text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle>Premium Plus</CardTitle>
                <CardDescription>For serious job seekers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">₹399</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {premiumPlusFeatures.map((feat) => (
                    <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>{feat}</span>
                  </li>
                  ))}
                  
                  {/* <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Premium Templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Multiple Formats</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>ATS Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Cloud Storage</span>
                  </li> */}
                </ul>
                <Button className="w-full bg-[#867cb3] hover:bg-[#756aa3]">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For teams and organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Team Management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Custom Branding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#867cb3] mr-2" />
                    <span>API Access</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[#867cb3] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Build Your Dream Resume?</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join thousands of users who landed their dream jobs with ResuFlex
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            {
              isSignedIn ? (
                <Button asChild variant="secondary" size="lg" className="px-6 sm:px-8">
            <Link href="/resumes">
              Go to resumes
              </Link>
            </Button>
              ) : (

            <Button asChild variant="secondary" size="lg" className="px-6 sm:px-8">
            <Link href="/sign-up">
              Sign Up Free
              </Link>
            </Button>
              )
            }
            {/* <Link>
            
            </Link>
            <Button variant="outline" size="lg" className="px-6 sm:px-8 text-[#867cb3] bg-white">
              See Templates
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-[#dc4f50]" />
                <span className="text-xl font-bold tracking-tight">
          <span style={{
            color: "#dc4f50"
          }}>R</span><span style={{
            color: "#439751"
          }}>esu</span><span style={{
            color: "#867cb3",
            fontStyle: "italic"
          }}>Flex</span>
        </span>
              </div>
              <p className="text-gray-400">The easiest way to create professional resumes that get you hired.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white"><HelpCircle className="inline h-4 w-4 mr-1" /> Help Center</a></li>
                <li><a href="#" className="hover:text-white"><BookOpen className="inline h-4 w-4 mr-1" /> Resume Tips</a></li>
                <li><a href="#" className="hover:text-white"><Briefcase className="inline h-4 w-4 mr-1" /> Career Advice</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white"><Mail className="inline h-4 w-4 mr-1" /> Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 ResuFlex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}