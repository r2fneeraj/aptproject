import DashboardLayout from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const Results = () => {
  const allResults = [
    { id: 1, name: 'General Aptitude Q1', date: '2026-05-10', score: '85/100', percentile: '92nd', status: 'Completed' },
    { id: 2, name: 'Logical Reasoning', date: '2026-05-02', score: '72/100', percentile: '82nd', status: 'Completed' },
    { id: 3, name: 'Quantitative Skills', date: '2026-04-25', score: '91/100', percentile: '98th', status: 'Completed' },
    { id: 4, name: 'Verbal Ability Test', date: '2026-04-15', score: '68/100', percentile: '75th', status: 'Completed' },
    { id: 5, name: 'Data Interpretation', date: '2026-04-01', score: '80/100', percentile: '88th', status: 'Completed' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">All Test Results</h1>
          <p className="text-muted-foreground mt-1">Review your historical performance data.</p>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Result History</CardTitle>
            <CardDescription>A comprehensive list of all assessments taken to date.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Test Name</TableHead>
                  <TableHead>Completion Date</TableHead>
                  <TableHead>Final Score</TableHead>
                  <TableHead>Percentile</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allResults.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell className="font-semibold">{result.name}</TableCell>
                    <TableCell className="text-muted-foreground">{result.date}</TableCell>
                    <TableCell className="font-bold text-primary">{result.score}</TableCell>
                    <TableCell>{result.percentile}</TableCell>
                    <TableCell>
                      <Badge variant="success">{result.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View Detailed Report</Button>
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

export default Results;
