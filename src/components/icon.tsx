import {
  Activity, Award, Building2, Check, CheckCircle, ChevronLeft, ChevronRight,
  Circle, CircleDashed, Clock, Cloud, Eye, EyeOff, FileText, Filter, Globe,
  GraduationCap, HelpCircle, Layers, Lightbulb, ListOrdered, LogOut, Map,
  MousePointer, Network, Plus, RefreshCw, Route, Search, ShieldOff, Sparkles,
  Stethoscope, Target, TrendingDown, TrendingUp, TriangleAlert, UserMinus,
  Users, Video, Workflow, Wrench, type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Activity, Award, Building2, Check, check: Check, CheckCircle,
  ChevronLeft, "chevron-left": ChevronLeft, ChevronRight, "chevron-right": ChevronRight,
  Circle, CircleDashed, Clock, Cloud, Eye, EyeOff, FileText, Filter, Globe,
  globe: Globe, GraduationCap, HelpCircle, Layers, Lightbulb, ListOrdered,
  LogOut, Map, MousePointer, Network, Plus, RefreshCw, Route, Search,
  ShieldOff, Sparkles, Stethoscope, Target, TrendingDown, TrendingUp,
  TriangleAlert, UserMinus, Users, Video, Workflow, Wrench,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Circle;
  return <Cmp className={className} aria-hidden="true" />;
}
