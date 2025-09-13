import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wheat, User, MapPin, DollarSign, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    farmArea: '',
    farmLocation: '',
    budget: '',
    animalType: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful!",
        description: "Welcome to AgroWatch! Your farm profile has been created.",
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary rounded-xl">
          <Wheat className="h-8 w-8 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">AgroWatch</h1>
          <p className="text-sm text-muted-foreground">Smart Farm Management</p>
        </div>
      </div>

      <Card className="w-full max-w-md bg-card border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold text-foreground">
            Register Your Farm
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Create your profile to start managing your farm efficiently
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="farmerName" className="text-sm font-medium text-foreground">
                Farmer Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="farmerName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.farmerName}
                  onChange={(e) => handleInputChange('farmerName', e.target.value)}
                  className="pl-10 bg-input border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="farmArea" className="text-sm font-medium text-foreground">
                Farm Area
              </Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="farmArea"
                  type="text"
                  placeholder="e.g., 5 acres or 2 hectares"
                  value={formData.farmArea}
                  onChange={(e) => handleInputChange('farmArea', e.target.value)}
                  className="pl-10 bg-input border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="farmLocation" className="text-sm font-medium text-foreground">
                Farm Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="farmLocation"
                  type="text"
                  placeholder="City, State/Province"
                  value={formData.farmLocation}
                  onChange={(e) => handleInputChange('farmLocation', e.target.value)}
                  className="pl-10 bg-input border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                Budget
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="budget"
                  type="text"
                  placeholder="Annual budget (e.g., $50,000)"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="pl-10 bg-input border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="animalType" className="text-sm font-medium text-foreground">
                Primary Animal Type
              </Label>
              <Select value={formData.animalType} onValueChange={(value) => handleInputChange('animalType', value)}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Select animal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pig">Pig</SelectItem>
                  <SelectItem value="poultry">Poultry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Register Farm'}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-sm text-primary hover:underline"
              >
                Already have an account? Sign in
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;