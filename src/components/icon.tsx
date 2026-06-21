import {
  Activity, Award, Brain, Building2, CalendarClock, Check, CheckCircle,
  ChevronLeft, ChevronRight, Circle, CircleDashed, Clock, Cloud, Download,
  Eye, EyeOff, FileSearch, FileText, Filter, Globe, GraduationCap, HelpCircle,
  Layers, LayoutGrid, Lightbulb, ListOrdered, LogOut, Mail, Map, MousePointer,
  Network, Plus, RefreshCw, Route, Search, ShieldOff, Sparkles, Stethoscope,
  Target, TrendingDown, TrendingUp, TriangleAlert, User, UserMinus, Users,
  Video, Workflow, Wrench, type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Activity, Award, Brain, Building2, CalendarClock, Check, check: Check,
  CheckCircle, ChevronLeft, "chevron-left": ChevronLeft, ChevronRight,
  "chevron-right": ChevronRight, Circle, CircleDashed, Clock, Cloud, Download,
  Eye, EyeOff, FileSearch, FileText, Filter, Globe, globe: Globe,
  GraduationCap, HelpCircle, Layers, LayoutGrid, Lightbulb, ListOrdered,
  LogOut, Mail, Map, MousePointer, Network, Plus, RefreshCw, Route, Search,
  ShieldOff, Sparkles, Stethoscope, Target, TrendingDown, TrendingUp,
  TriangleAlert, User, UserMinus, Users, Video, Workflow, Wrench,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Circle;
  return <Cmp className={className} aria-hidden="true" />;
}
