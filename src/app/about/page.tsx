import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ScrollText, BookOpen, Globe, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Main Welcome Section */}
      <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 dark:from-blue-900 dark:to-indigo-900 dark:text-indigo-200 dark:border-indigo-800">
        <ScrollText className="h-4 w-4" />
        <AlertTitle className="text-xl font-semibold">
          Welcome to Our Educational Resource Hub
        </AlertTitle>
        <AlertDescription>
          Your comprehensive destination for academic excellence and exam
          preparation
        </AlertDescription>
      </Alert>

      {/* Mission Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Our Mission
          </CardTitle>
          <CardDescription>
            Empowering students with quality educational resources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We&apos;re dedicated to making quality education accessible to everyone.
            Our platform serves as a comprehensive repository of carefully
            curated educational materials, focusing on past papers and study
            resources that have proven invaluable for student success.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Past Papers</Badge>
            <Badge variant="secondary">Study Materials</Badge>
            <Badge variant="secondary">Reference Documents</Badge>
            <Badge variant="secondary">Learning Resources</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Resource Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our content is thoughtfully gathered from various reputable
              sources across the internet, including academic institutions,
              educational websites, and expert contributors. All materials are
              organized for easy access and maximum learning efficiency.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Educational Purpose
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This platform is developed strictly for educational purposes. We
              believe in fostering an environment of collaborative learning and
              academic growth, while maintaining respect for intellectual
              property and educational standards.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer Note */}
      <Card className="bg-muted/50 border border-border">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            We&apos;re constantly working to improve and expand our resource
            collection. Your feedback and suggestions help us better serve the
            educational community.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
