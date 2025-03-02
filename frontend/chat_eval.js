import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

export default function ChatbotEvaluation() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rating, setRating] = useState(50);

  const handleSendQuery = async () => {
    if (!query) return;
    setLoading(true);
    setProgress(0);
    setResponse("");

    // Simulate response progress
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      setProgress(progressValue);
      if (progressValue >= 100) clearInterval(interval);
    }, 200);

    // Simulate chatbot response
    setTimeout(() => {
      setResponse("This is a sample response from the chatbot.");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Chatbot Evaluation</h1>
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query..."
        />
        <Button onClick={handleSendQuery} disabled={loading}>
          Send
        </Button>
      </div>
      {loading && <Progress value={progress} />}
      {response && (
        <Card>
          <CardContent className="p-4">{response}</CardContent>
        </Card>
      )}
      {response && (
        <div className="space-y-2">
          <p>Rate the response quality:</p>
          <Slider
            min={0}
            max={100}
            value={[rating]}
            onValueChange={(val) => setRating(val[0])}
          />
          <p>Score: {rating}/100</p>
        </div>
      )}
    </div>
  );
}
