/**
 * TypeScript interfaces for AI-Vibe-Prompts framework
 * Defines agent configurations, workflow structures, and system types
 */

export interface AgentMetadata {
  name: string;
  description: string;
  category: 'core' | 'helpers' | 'design' | 'specialists' | 'testing' | 'operations' | 'marketing' | 'product' | 'project' | 'strategy' | 'coaching';
  version: string;
  capabilities: string[];
  metrics: string[];
  confidence_threshold: number;
  framework_expertise?: string[];
  specializations?: string[];
  dependencies?: string[];
  invokable_by?: string[];
  author?: string;
}

export interface AgentRegistry {
  [agentName: string]: AgentConfiguration;
}

export interface AgentConfiguration extends AgentMetadata {
  filePath: string;
  lastUpdated: Date;
  isActive: boolean;
  performanceMetrics?: AgentPerformanceMetrics;
}

export interface AgentPerformanceMetrics {
  averageExecutionTime: number;
  successRate: number;
  averageConfidenceScore: number;
  totalInvocations: number;
  lastInvocation: Date;
}

export interface WorkflowStep {
  id: string;
  agentName: string;
  taskDescription: string;
  confidenceThreshold: number;
  qualityGates: QualityGate[];
  dependencies: string[];
  timeout: number;
  retryCount: number;
}

export interface QualityGate {
  name: string;
  threshold: number;
  metric: 'confidence_score' | 'technical_accuracy' | 'implementation_completeness' | 'security_compliance' | 'performance_impact';
  required: boolean;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  parallelExecution: boolean;
  failureStrategy: 'halt' | 'continue' | 'fallback';
  estimatedDuration: number;
  requiredCapabilities: string[];
}

export interface AgentInvocationResult {
  agentName: string;
  taskDescription: string;
  output: string;
  confidence_score: number;
  execution_time: number;
  success: boolean;
  error?: string;
  qualityAssessment: QualityAssessment;
  timestamp: Date;
}

export interface QualityAssessment {
  confidence_score: number;
  technical_accuracy: number;
  implementation_completeness: number;
  security_compliance: number;
  performance_impact: number;
  overall_score: number;
  passed: boolean;
  failedGates: string[];
}

export interface ProjectContext {
  framework: string[];
  technologies: string[];
  architecture: string;
  complexity: 'low' | 'medium' | 'high';
  requirements: string[];
  constraints: string[];
}

export interface SpecialistSelectionCriteria {
  framework: string;
  taskType: string;
  complexity: number;
  requiredCapabilities: string[];
  confidenceThreshold: number;
}

export interface FallbackChain {
  primary: string;
  secondary: string[];
  emergency: string;
}

export interface AgentDiscoveryResult {
  totalAgents: number;
  categoryCounts: Record<string, number>;
  frameworkSpecialists: Record<string, string[]>;
  discoveryTime: number;
  errors: string[];
}

export interface ConfidenceScoreBreakdown {
  taskComplexityMatch: number;
  contextCompleteness: number;
  implementationCertainty: number;
  riskAssessment: number;
  overall: number;
  reasoning: string;
}

export interface SystemConfiguration {
  version: string;
  agentDiscovery: {
    enabled: boolean;
    scanInterval: number;
    cacheTimeout: number;
  };
  confidenceScoring: {
    enabled: boolean;
    defaultThreshold: number;
    fallbackAgent: string;
  };
  qualityGates: {
    enabled: boolean;
    strictMode: boolean;
    defaultGates: QualityGate[];
  };
  performance: {
    monitoring: boolean;
    metricsRetention: number;
    alertThresholds: Record<string, number>;
  };
}

export interface HandoffConfiguration {
  sourceAgent: string;
  targetAgent: string;
  input: string;
  output: string;
  checklist: string[];
  validation: string[];
  qualityGates: QualityGate[];
}

export interface WorkflowPreset {
  name: string;
  description: string;
  agents: string[];
  phases: string[];
  deliverables: string[];
  estimatedTime: number;
  complexity: 'low' | 'medium' | 'high';
}

export interface ExpansionPack {
  name: string;
  description: string;
  version: string;
  agents: string[];
  templates: string[];
  dependencies: string[];
  installation: {
    preInstall: string[];
    postInstall: string[];
    validation: string[];
  };
}

// Tool call interfaces
export interface ToolCall {
  type: 'function';
  function: {
    name: string;
    arguments: Record<string, any>;
  };
}

export interface MessageNotifyUserTool extends ToolCall {
  function: {
    name: 'message_notify_user';
    arguments: {
      text: string;
    };
  };
}

export interface MessageAskUserTool extends ToolCall {
  function: {
    name: 'message_ask_user';
    arguments: {
      text: string;
    };
  };
}

export interface FileReadTool extends ToolCall {
  function: {
    name: 'file_read';
    arguments: {
      file_path: string;
    };
  };
}

export interface FileWriteTool extends ToolCall {
  function: {
    name: 'file_write';
    arguments: {
      file_path: string;
      content: string;
    };
  };
}

export interface FileApplyPatchTool extends ToolCall {
  function: {
    name: 'file_apply_patch';
    arguments: {
      file_path: string;
      patch_content: string;
    };
  };
}

export interface ShellExecTool extends ToolCall {
  function: {
    name: 'shell_exec';
    arguments: {
      command: string;
      exec_dir: string;
    };
  };
}

export interface CodebaseSearchTool extends ToolCall {
  function: {
    name: 'codebase_search';
    arguments: {
      query: string;
    };
  };
}

export interface InvokeAgentTool extends ToolCall {
  function: {
    name: 'invoke_agent';
    arguments: {
      agent_name: string;
      task_description: string;
    };
  };
}

// Validation schemas
export const REQUIRED_AGENT_FIELDS = [
  'name',
  'description', 
  'category',
  'version',
  'capabilities',
  'metrics',
  'confidence_threshold'
] as const;

export const VALID_CATEGORIES = [
  'core',
  'helpers', 
  'design',
  'specialists',
  'testing',
  'operations',
  'marketing',
  'product',
  'project',
  'strategy',
  'coaching'
] as const;

export const SUPPORTED_FRAMEWORKS = [
  'nextjs',
  'react',
  'vue',
  'angular',
  'svelte',
  'nuxt',
  'gatsby',
  'remix'
] as const;

// Utility types
export type AgentCategory = typeof VALID_CATEGORIES[number];
export type SupportedFramework = typeof SUPPORTED_FRAMEWORKS[number];
export type RequiredAgentField = typeof REQUIRED_AGENT_FIELDS[number];

// Error types
export class AgentDiscoveryError extends Error {
  constructor(message: string, public agentPath?: string) {
    super(message);
    this.name = 'AgentDiscoveryError';
  }
}

export class ConfidenceThresholdError extends Error {
  constructor(message: string, public score: number, public threshold: number) {
    super(message);
    this.name = 'ConfidenceThresholdError';
  }
}

export class QualityGateError extends Error {
  constructor(message: string, public failedGates: string[]) {
    super(message);
    this.name = 'QualityGateError';
  }
}

export class WorkflowExecutionError extends Error {
  constructor(message: string, public step: string, public agentName: string) {
    super(message);
    this.name = 'WorkflowExecutionError';
  }
}