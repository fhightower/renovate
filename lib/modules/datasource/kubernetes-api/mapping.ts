export const KubernetesApiVersions: Record<string, string[]> = {
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#v1-16
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#networkpolicy-v116
  NetworkPolicy: ['extensions/v1beta1', 'networking.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#daemonset-v116
  DaemonSet: ['extensions/v1beta1', 'apps/v1beta2', 'apps/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#deployment-v116
  Deployment: ['extensions/v1beta1', 'apps/v1beta1', 'apps/v1beta2', 'apps/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#statefulset-v116
  StatefulSet: ['apps/v1beta1', 'apps/v1beta2', 'apps/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#replicaset-v116
  ReplicaSet: ['extensions/v1beta1', 'apps/v1beta1', 'apps/v1beta2', 'apps/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#psp-v116
  PodSecurityPolicy: ['extensions/v1beta1', 'policy/v1beta1'],

  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#v1-22
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#webhook-resources-v122
  MutatingWebhookConfiguration: [
    'admissionregistration.k8s.io/v1beta1',
    'admissionregistration.k8s.io/v1',
  ],
  ValidatingWebhookConfiguration: [
    'admissionregistration.k8s.io/v1beta1',
    'admissionregistration.k8s.io/v1',
  ],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#customresourcedefinition-v122
  CustomResourceDefinition: [
    'apiextensions.k8s.io/v1beta1',
    'apiextensions.k8s.io/v1',
  ],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#apiservice-v122
  APIService: ['apiregistration.k8s.io/v1beta1', 'apiregistration.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#tokenreview-v122
  TokenReview: ['authentication.k8s.io/v1beta1', 'authentication.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#subjectaccessreview-resources-v122
  LocalSubjectAccessReview: [
    'authorization.k8s.io/v1beta1',
    'authorization.k8s.io/v1',
  ],
  SelfSubjectAccessReview: [
    'authorization.k8s.io/v1beta1',
    'authorization.k8s.io/v1',
  ],
  SubjectAccessReview: [
    'authorization.k8s.io/v1beta1',
    'authorization.k8s.io/v1',
  ],
  SelfSubjectRulesReview: [
    'authorization.k8s.io/v1beta1',
    'authorization.k8s.io/v1',
  ],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#certificatesigningrequest-v122
  CertificateSigningRequest: [
    'certificates.k8s.io/v1beta1',
    'certificates.k8s.io/v1',
  ],

  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#lease-v122
  Lease: ['coordination.k8s.io/v1beta1', 'coordination.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#ingress-v122
  Ingress: [
    'extensions/v1beta1',
    'networking.k8s.io/v1beta1',
    'networking.k8s.io/v1',
  ],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#ingressclass-v122
  IngressClass: ['networking.k8s.io/v1beta1', 'networking.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#rbac-resources-v122
  ClusterRole: [
    'rbac.authorization.k8s.io/v1beta1',
    'rbac.authorization.k8s.io/v1',
  ],
  ClusterRoleBinding: [
    'rbac.authorization.k8s.io/v1beta1',
    'rbac.authorization.k8s.io/v1',
  ],
  Role: ['rbac.authorization.k8s.io/v1beta1', 'rbac.authorization.k8s.io/v1'],
  RoleBinding: [
    'rbac.authorization.k8s.io/v1beta1',
    'rbac.authorization.k8s.io/v1',
  ],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#priorityclass-v122
  PriorityClass: ['scheduling.k8s.io/v1beta1', 'scheduling.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#storage-resources-v122
  CSIDriver: ['storage.k8s.io/v1beta1', 'storage.k8s.io/v1'],
  CSINode: ['storage.k8s.io/v1beta1', 'storage.k8s.io/v1'],
  StorageClass: ['storage.k8s.io/v1beta1', 'storage.k8s.io/v1'],
  VolumeAttachment: ['storage.k8s.io/v1beta1', 'storage.k8s.io/v1'],

  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#v1-25
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#cronjob-v125
  CronJob: ['batch/v1beta1', 'batch/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#endpointslice-v125
  EndpointSlice: ['discovery.k8s.io/v1beta1', 'discovery.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#event-v125
  Event: ['events.k8s.io/v1beta1', 'events.k8s.io/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#horizontalpodautoscaler-v125
  HorizontalPodAutoscaler: ['autoscaling/v2beta1', 'autoscaling/v2'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#poddisruptionbudget-v125
  PodDisruptionBudget: ['policy/v1beta1', 'policy/v1'],
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#runtimeclass-v125
  RuntimeClass: ['node.k8s.io/v1beta1', 'node.k8s.io/v1'],

  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#v1-26
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#flowcontrol-resources-v126
  FlowSchema: [
    'flowcontrol.apiserver.k8s.io/v1beta1',
    'flowcontrol.apiserver.k8s.io/v1beta2',
  ],
  PriorityLevelConfiguration: [
    'flowcontrol.apiserver.k8s.io/v1beta1',
    'flowcontrol.apiserver.k8s.io/v1beta2',
  ],

  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#v1-27
  // https://kubernetes.io/docs/reference/using-api/deprecation-guide/#csistoragecapacity-v127
  CSIStorageCapacity: ['storage.k8s.io/v1beta1', 'storage.k8s.io/v1'],
};
