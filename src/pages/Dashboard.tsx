import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Building2, 
  BarChart3, 
  Heart, 
  FileText, 
  Users, 
  Trophy, 
  LogOut,
  Plus,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Activity
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data
  const farmerData = {
    name: "John Smith",
    location: "Green Valley, CA",
    farmArea: "5 acres",
    totalSheds: 3,
    totalAnimals: 250,
    mortalityRate: 2.1,
    productionRate: 85
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shed', label: 'Shed', icon: Building2 },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'health', label: 'Health Management', icon: Heart },
    { id: 'guidelines', label: 'Guidelines', icon: FileText },
    { id: 'visitors', label: 'Visitor Management', icon: Users },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Sheds</p>
                      <p className="text-2xl font-bold text-foreground">{farmerData.totalSheds}</p>
                    </div>
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Animals</p>
                      <p className="text-2xl font-bold text-foreground">{farmerData.totalAnimals}</p>
                    </div>
                    <Activity className="h-8 w-8 text-secondary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Mortality Rate</p>
                      <p className="text-2xl font-bold text-foreground">{farmerData.mortalityRate}%</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-farm-danger" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Production Rate</p>
                      <p className="text-2xl font-bold text-foreground">{farmerData.productionRate}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-farm-success" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    onClick={() => setActiveTab('shed')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Shed
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setActiveTab('health')}
                    className="border-border hover:bg-muted"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Vaccination
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setActiveTab('analytics')}
                    className="border-border hover:bg-muted"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'shed':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Shed Management</h2>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add New Shed
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((shed) => (
                <Card key={shed} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Shed {shed}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Poultry • 80 animals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Vaccinated:</span>
                        <Badge variant="secondary">Yes</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Age:</span>
                        <span className="text-sm text-foreground">3 months</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-border hover:bg-muted"
                      >
                        Daily Log
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Analytics Dashboard</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Mortality Rate Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Chart.js Mortality Rate Graph
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Production Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Chart.js Production Graph
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Summary Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Average Mortality Rate</h4>
                    <p className="text-2xl font-bold text-farm-danger">{farmerData.mortalityRate}%</p>
                    <p className="text-sm text-muted-foreground">Across all sheds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Average Production</h4>
                    <p className="text-2xl font-bold text-farm-success">{farmerData.productionRate}%</p>
                    <p className="text-sm text-muted-foreground">Monthly average</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'health':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Health Management</h2>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Vaccination Scheduler</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Upcoming vaccination reminders based on animal age
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { shed: 'Shed 1', animal: 'Poultry', nextVaccination: '2024-01-15', status: 'Due Soon' },
                    { shed: 'Shed 2', animal: 'Poultry', nextVaccination: '2024-01-20', status: 'Scheduled' },
                    { shed: 'Shed 3', animal: 'Pig', nextVaccination: '2024-01-25', status: 'Scheduled' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">{item.shed}</h4>
                        <p className="text-sm text-muted-foreground">{item.animal} • Next: {item.nextVaccination}</p>
                      </div>
                      <Badge variant={item.status === 'Due Soon' ? 'destructive' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {navigationItems.find(item => item.id === activeTab)?.label}
            </h2>
            <p className="text-muted-foreground">
              This section is under development and will be available soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">
              Welcome, {farmerData.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {farmerData.location} • {farmerData.farmArea}
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="border-border hover:bg-muted"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border px-4 py-2">
        <div className="flex space-x-1 overflow-x-auto">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-2 whitespace-nowrap ${
                activeTab === item.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;