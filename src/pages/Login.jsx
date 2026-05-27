import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Input, Label } from '../components/ui/Input';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-border shadow-xl bg-card">
          <CardHeader className="space-y-3 text-center pb-8">
            <div className="mx-auto w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-2 shadow-inner">
              <span className="text-white font-bold text-2xl tracking-tighter">AT</span>
            </div>
            <div className="space-y-1">
              <CardTitle className="text-3xl font-bold tracking-tight text-foreground">Aptitude Portal</CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                Sign in to your student account
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@university.edu" 
                  required 
                  className="h-12 border-border focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="password" className="text-sm font-semibold text-foreground">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="h-12 border-border focus:ring-primary/20"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20" />
                  <span>Stay signed in</span>
                </label>
                <a href="#" className="text-primary hover:text-primary-hover font-semibold transition-colors">Forgot password?</a>
              </div>
              <Button className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]" type="submit">
                Access Portal
              </Button>
            </form>
          </CardContent>
        </Card>
        <p className="text-center mt-8 text-sm text-muted-foreground">
          &copy; 2026 Aptitude Test Portal. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
