import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  ResponsiveContainer 
} from 'recharts';
import { 
  Download, 
  Trophy, 
  Target, 
  TrendingUp, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

const Result = () => {
  const navigate = useNavigate();

  const chartData = [
    { subject: 'Mathematics', A: 85, fullMark: 100 },
    { subject: 'Logical Reasoning', A: 72, fullMark: 100 },
    { subject: 'Quantitative', A: 91, fullMark: 100 },
    { subject: 'Verbal Ability', A: 65, fullMark: 100 },
    { subject: 'Data Interpretation', A: 78, fullMark: 100 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary">Test Results</h1>
            <p className="text-muted-foreground mt-1">General Aptitude Q1 • Submitted on May 26, 2026</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </Button>
            <Button className="gap-2 shadow-lg shadow-primary/20">
              <Download size={18} /> Download Report
            </Button>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 bg-primary text-white border-none shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Trophy size={120} />
            </div>
            <CardContent className="pt-8 space-y-6 relative">
              <div className="text-center space-y-2">
                <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-sm">Overall Score</p>
                <div className="text-7xl font-black">82<span className="text-3xl opacity-60">/100</span></div>
                <Badge className="bg-white/20 text-white border-none px-4 py-1">Top 15% Percentile</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <p className="text-xs text-primary-foreground/70 mb-1">Accuracy</p>
                  <p className="text-xl font-bold">88%</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <p className="text-xs text-primary-foreground/70 mb-1">Time Used</p>
                  <p className="text-xl font-bold">24:12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="text-primary" size={20} />
                Topic Analysis
              </CardTitle>
              <CardDescription>Performance across different aptitude areas</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Student"
                    dataKey="A"
                    stroke="#1E3A5F"
                    fill="#1E3A5F"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-sm border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                <TrendingUp size={20} />
                Key Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { title: 'Quantitative Mastery', desc: 'Exceptional performance in number series and algebraic problems.' },
                  { title: 'High Accuracy', desc: '95% accuracy in Logical Reasoning section.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1">
                      <ArrowRight size={14} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-l-4 border-l-amber-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-amber-700">
                <AlertCircle size={20} />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { title: 'Verbal Speed', desc: 'Focus on improving reading comprehension speed for the English section.' },
                  { title: 'Time Management', desc: 'Spent more than 3 minutes on 4 different questions.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                      <ArrowRight size={14} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Previous Attempts */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Previous Attempts Comparison</CardTitle>
            <CardDescription>See how you've progressed over time</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Test Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Percentile</TableHead>
                  <TableHead className="text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'Quantitative Skills', date: 'May 10, 2026', score: '91/100', percentile: '98th', trend: 'up' },
                  { name: 'Logical Reasoning', date: 'May 02, 2026', score: '72/100', percentile: '82nd', trend: 'down' },
                  { name: 'General Aptitude Q1', date: 'Apr 25, 2026', score: '85/100', percentile: '92nd', trend: 'up' },
                ].map((attempt, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{attempt.name}</TableCell>
                    <TableCell className="text-muted-foreground">{attempt.date}</TableCell>
                    <TableCell className="font-bold text-primary">{attempt.score}</TableCell>
                    <TableCell>{attempt.percentile}</TableCell>
                    <TableCell className="text-right">
                      <span className={attempt.trend === 'up' ? 'text-green-600' : 'text-destructive'}>
                        {attempt.trend === 'up' ? '▲ Improving' : '▼ Declining'}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Result;
