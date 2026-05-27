import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ChevronLeft,
  Info
} from 'lucide-react';

const Review = () => {
  const navigate = useNavigate();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Mocked state
  const questions = Array(20).fill(0).map((_, i) => ({
    id: i + 1,
    status: i < 15 ? 'Answered' : i < 18 ? 'Review' : 'Unanswered',
    answer: i < 15 ? 'Option B' : null
  }));

  const answeredCount = questions.filter(q => q.status === 'Answered').length;
  const unansweredCount = questions.filter(q => q.status === 'Unanswered').length;

  return (
    <div className="min-h-screen bg-background flex flex-col p-8">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" className="gap-2" onClick={() => navigate('/exam')}>
            <ChevronLeft size={18} /> Back to Exam
          </Button>
          <h1 className="text-2xl font-bold text-primary">Review Submission</h1>
          <div className="w-[100px]" /> {/* Spacer */}
        </div>

        {unansweredCount > 0 && (
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center gap-4 text-amber-800 animate-in slide-in-from-top duration-500">
            <AlertTriangle className="shrink-0 text-amber-500" size={24} />
            <div>
              <p className="font-bold">Unanswered Questions Detected</p>
              <p className="text-sm">You have {unansweredCount} questions left unanswered. We recommend reviewing them before final submission.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={20} />
                  Question Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Q.No</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Selected Answer</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {questions.map((q) => (
                      <TableRow key={q.id}>
                        <TableCell className="font-bold">{q.id}</TableCell>
                        <TableCell>
                          <Badge variant={q.status === 'Answered' ? 'success' : q.status === 'Review' ? 'warning' : 'secondary'}>
                            {q.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{q.answer || '--'}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => navigate('/exam')}>View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-sm border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-lg">Final Submission</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Questions</span>
                    <span className="font-bold">{questions.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Answered</span>
                    <span className="font-bold text-green-600">{answeredCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Unanswered</span>
                    <span className="font-bold text-destructive">{unansweredCount}</span>
                  </div>
                </div>
                
                <div className="bg-accent/50 p-4 rounded-lg flex gap-3 text-xs text-muted-foreground">
                  <Info className="shrink-0 text-primary" size={16} />
                  <p>Once you submit, you will not be able to change your answers. The results will be calculated immediately.</p>
                </div>

                <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20" onClick={() => setIsSubmitModalOpen(true)}>
                  Submit Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)}
        title="Final Confirmation"
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600">
            <AlertTriangle size={32} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">Are you sure?</h3>
            <p className="text-muted-foreground">
              You are about to submit your test. This action cannot be undone.
            </p>
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={() => setIsSubmitModalOpen(false)}>
              Cancel
            </Button>
            <Button className="flex-1" onClick={() => navigate('/result')}>
              Yes, Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Review;
