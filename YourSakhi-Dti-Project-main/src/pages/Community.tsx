
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Mock data for forum posts
const forumPosts = [
  {
    id: 1,
    title: "Managing PCOS symptoms naturally",
    content: "I was recently diagnosed with PCOS and I'm looking for natural ways to manage my symptoms. Does anyone have experience with dietary changes or supplements that have helped?",
    author: "Emily",
    authorInitials: "EM",
    date: "3 days ago",
    replies: 8,
    likes: 12,
    category: "Conditions"
  },
  {
    id: 2,
    title: "Tips for reducing period pain",
    content: "Every month my cramps are unbearable. I've tried over-the-counter pain medication but it doesn't seem to help much. What are your go-to remedies for managing period pain?",
    author: "Sophie",
    authorInitials: "SO",
    date: "1 week ago",
    replies: 15,
    likes: 24,
    category: "Menstrual Health"
  },
  {
    id: 3,
    title: "Anxiety during pregnancy",
    content: "I'm 6 months pregnant and have been experiencing increased anxiety. Is this normal? What techniques have helped others cope with prenatal anxiety?",
    author: "Priya",
    authorInitials: "PR",
    date: "2 days ago",
    replies: 6,
    likes: 9,
    category: "Pregnancy"
  },
  {
    id: 4,
    title: "Recommendations for gynecologists in Mumbai",
    content: "I recently moved to Mumbai and I'm looking for a good gynecologist. Does anyone have recommendations for doctors who are patient, thorough, and good listeners?",
    author: "Neha",
    authorInitials: "NE",
    date: "5 days ago",
    replies: 11,
    likes: 5,
    category: "General"
  },
  {
    id: 5,
    title: "Exercise routines during your period",
    content: "What kind of exercises do you do during your period? I usually feel too tired for my regular workout routine, but I'd like to stay active. Any recommendations for gentler exercises?",
    author: "Anika",
    authorInitials: "AN",
    date: "2 weeks ago",
    replies: 18,
    likes: 27,
    category: "Fitness"
  },
  {
    id: 6,
    title: "Dealing with hormonal acne",
    content: "My skin breaks out terribly before my period. I've tried various skincare products but nothing seems to help consistently. Has anyone found effective solutions for hormonal acne?",
    author: "Lisa",
    authorInitials: "LI",
    date: "1 day ago",
    replies: 9,
    likes: 14,
    category: "Skin Health"
  }
];

const categories = [
  "All",
  "Menstrual Health",
  "Pregnancy",
  "Conditions",
  "Fitness",
  "Nutrition",
  "Mental Health",
  "Skin Health",
  "General"
];

const Community = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const { toast } = useToast();
  
  const filteredPosts = forumPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!postTitle.trim() || !postContent.trim() || !postCategory) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to create a post.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send data to a backend
    toast({
      title: "Post Created",
      description: "Your post has been published to the community forum.",
    });
    
    // Reset form
    setPostTitle("");
    setPostContent("");
    setPostCategory("");
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold gradient-heading mb-4">Community Forum</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with other women, share experiences, ask questions, and find support 
            in our safe and inclusive community space.
          </p>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="browse" className="text-base py-3">Browse Discussions</TabsTrigger>
              <TabsTrigger value="create" className="text-base py-3">Create New Post</TabsTrigger>
            </TabsList>
            
            <TabsContent value="browse" className="animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-3">Search Posts</h2>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search discussions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                      />
                      <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold mb-3">Categories</h2>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                            activeCategory === category
                              ? "bg-sakhi-100 text-sakhi-600 font-medium"
                              : "hover:bg-sakhi-50 text-foreground/80"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-sakhi-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-3">Community Guidelines</h2>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>Be respectful and supportive of others</li>
                      <li>Protect your privacy and personal information</li>
                      <li>No medical advice - only share experiences</li>
                      <li>No promotional content or spam</li>
                      <li>Report inappropriate content</li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">{activeCategory === "All" ? "All Discussions" : activeCategory}</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{filteredPosts.length} posts</span>
                    </div>
                  </div>
                  
                  {filteredPosts.length > 0 ? (
                    <div className="space-y-4">
                      {filteredPosts.map((post) => (
                        <Card key={post.id} className="hover:border-sakhi-200 transition-colors">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-4">
                                <Avatar className="h-10 w-10 bg-sakhi-100 text-sakhi-600">
                                  <AvatarFallback>{post.authorInitials}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="text-lg font-semibold hover:text-sakhi-600 cursor-pointer">
                                    {post.title}
                                  </h3>
                                  <div className="flex items-center space-x-3 text-sm text-muted-foreground mt-1">
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span className="text-xs bg-sakhi-50 text-sakhi-600 px-2 py-1 rounded-full">
                                      {post.category}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <p className="text-foreground/80 line-clamp-2">{post.content}</p>
                            </div>
                            
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                  </svg>
                                  <span>{post.replies} replies</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                  <span>{post.likes} likes</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="text-sakhi-600 hover:text-sakhi-700 hover:bg-sakhi-50">
                                View Discussion
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg border border-sakhi-100 text-center">
                      <svg
                        className="h-12 w-12 text-sakhi-200 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h3 className="text-lg font-semibold mb-1">No Discussions Found</h3>
                      <p className="text-muted-foreground mb-4">
                        We couldn't find any discussions matching your search. Try different keywords or categories.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("");
                          setActiveCategory("All");
                        }}
                        className="border-sakhi-200 text-sakhi-700 hover:bg-sakhi-50"
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="create" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-semibold mb-6">Create a New Discussion</h2>
                  
                  <form onSubmit={handleCreatePost} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="post-title" className="block font-medium">
                        Title
                      </label>
                      <Input
                        id="post-title"
                        placeholder="Enter a descriptive title for your discussion"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="post-category" className="block font-medium">
                        Category
                      </label>
                      <select
                        id="post-category"
                        value={postCategory}
                        onChange={(e) => setPostCategory(e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {categories.filter(c => c !== "All").map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="post-content" className="block font-medium">
                        Content
                      </label>
                      <Textarea
                        id="post-content"
                        placeholder="Share your question, experience, or thoughts with the community..."
                        rows={6}
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="bg-sakhi-50 p-4 rounded-lg text-sm">
                      <p className="font-medium text-sakhi-700 mb-2">Community Guidelines Reminder:</p>
                      <ul className="list-disc list-inside text-foreground/80 space-y-1">
                        <li>Be respectful and supportive of others</li>
                        <li>Avoid sharing personal identifying information</li>
                        <li>Posts seeking or providing specific medical advice will be removed</li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-sakhi-500 hover:bg-sakhi-600">
                        Post Discussion
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Community;
