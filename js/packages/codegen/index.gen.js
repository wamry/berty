import jsonPb from './index.pb.js'

export const berty = {
	protocol: {
		v1: {
			ProtocolService: jsonPb.lookup('.berty.protocol.v1.ProtocolService'),
		},
	},
	types: {
		v1: {
			GroupType: jsonPb.lookup('.berty.types.v1.GroupType'),
			EventType: jsonPb.lookup('.berty.types.v1.EventType'),
			Account: jsonPb.lookup('.berty.types.v1.Account'),
			Group: jsonPb.lookup('.berty.types.v1.Group'),
			GroupMetadata: jsonPb.lookup('.berty.types.v1.GroupMetadata'),
			GroupEnvelope: jsonPb.lookup('.berty.types.v1.GroupEnvelope'),
			MessageHeaders: jsonPb.lookup('.berty.types.v1.MessageHeaders'),
			MessageEnvelope: jsonPb.lookup('.berty.types.v1.MessageEnvelope'),
			EventContext: jsonPb.lookup('.berty.types.v1.EventContext'),
			AppMetadata: jsonPb.lookup('.berty.types.v1.AppMetadata'),
			ContactAddAliasKey: jsonPb.lookup('.berty.types.v1.ContactAddAliasKey'),
			GroupAddMemberDevice: jsonPb.lookup('.berty.types.v1.GroupAddMemberDevice'),
			DeviceSecret: jsonPb.lookup('.berty.types.v1.DeviceSecret'),
			GroupAddDeviceSecret: jsonPb.lookup('.berty.types.v1.GroupAddDeviceSecret'),
			MultiMemberGroupAddAliasResolver: jsonPb.lookup(
				'.berty.types.v1.MultiMemberGroupAddAliasResolver',
			),
			MultiMemberGrantAdminRole: jsonPb.lookup('.berty.types.v1.MultiMemberGrantAdminRole'),
			MultiMemberInitialMember: jsonPb.lookup('.berty.types.v1.MultiMemberInitialMember'),
			GroupAddAdditionalRendezvousSeed: jsonPb.lookup(
				'.berty.types.v1.GroupAddAdditionalRendezvousSeed',
			),
			GroupRemoveAdditionalRendezvousSeed: jsonPb.lookup(
				'.berty.types.v1.GroupRemoveAdditionalRendezvousSeed',
			),
			AccountGroupJoined: jsonPb.lookup('.berty.types.v1.AccountGroupJoined'),
			AccountGroupLeft: jsonPb.lookup('.berty.types.v1.AccountGroupLeft'),
			AccountContactRequestDisabled: jsonPb.lookup('.berty.types.v1.AccountContactRequestDisabled'),
			AccountContactRequestEnabled: jsonPb.lookup('.berty.types.v1.AccountContactRequestEnabled'),
			AccountContactRequestReferenceReset: jsonPb.lookup(
				'.berty.types.v1.AccountContactRequestReferenceReset',
			),
			AccountContactRequestEnqueued: jsonPb.lookup('.berty.types.v1.AccountContactRequestEnqueued'),
			AccountContactRequestSent: jsonPb.lookup('.berty.types.v1.AccountContactRequestSent'),
			AccountContactRequestReceived: jsonPb.lookup('.berty.types.v1.AccountContactRequestReceived'),
			AccountContactRequestDiscarded: jsonPb.lookup(
				'.berty.types.v1.AccountContactRequestDiscarded',
			),
			AccountContactRequestAccepted: jsonPb.lookup('.berty.types.v1.AccountContactRequestAccepted'),
			AccountContactBlocked: jsonPb.lookup('.berty.types.v1.AccountContactBlocked'),
			AccountContactUnblocked: jsonPb.lookup('.berty.types.v1.AccountContactUnblocked'),
			InstanceExportData: jsonPb.lookup('.berty.types.v1.InstanceExportData'),
			InstanceGetConfiguration: jsonPb.lookup('.berty.types.v1.InstanceGetConfiguration'),
			ContactRequestReference: jsonPb.lookup('.berty.types.v1.ContactRequestReference'),
			ContactRequestDisable: jsonPb.lookup('.berty.types.v1.ContactRequestDisable'),
			ContactRequestEnable: jsonPb.lookup('.berty.types.v1.ContactRequestEnable'),
			ContactRequestResetReference: jsonPb.lookup('.berty.types.v1.ContactRequestResetReference'),
			ContactRequestSend: jsonPb.lookup('.berty.types.v1.ContactRequestSend'),
			ContactRequestAccept: jsonPb.lookup('.berty.types.v1.ContactRequestAccept'),
			ContactRequestDiscard: jsonPb.lookup('.berty.types.v1.ContactRequestDiscard'),
			ContactBlock: jsonPb.lookup('.berty.types.v1.ContactBlock'),
			ContactUnblock: jsonPb.lookup('.berty.types.v1.ContactUnblock'),
			ContactAliasKeySend: jsonPb.lookup('.berty.types.v1.ContactAliasKeySend'),
			MultiMemberGroupCreate: jsonPb.lookup('.berty.types.v1.MultiMemberGroupCreate'),
			MultiMemberGroupJoin: jsonPb.lookup('.berty.types.v1.MultiMemberGroupJoin'),
			MultiMemberGroupLeave: jsonPb.lookup('.berty.types.v1.MultiMemberGroupLeave'),
			MultiMemberGroupAliasResolverDisclose: jsonPb.lookup(
				'.berty.types.v1.MultiMemberGroupAliasResolverDisclose',
			),
			MultiMemberGroupAdminRoleGrant: jsonPb.lookup(
				'.berty.types.v1.MultiMemberGroupAdminRoleGrant',
			),
			MultiMemberGroupInvitationCreate: jsonPb.lookup(
				'.berty.types.v1.MultiMemberGroupInvitationCreate',
			),
			AppMetadataSend: jsonPb.lookup('.berty.types.v1.AppMetadataSend'),
			AppMessageSend: jsonPb.lookup('.berty.types.v1.AppMessageSend'),
			GroupMetadataEvent: jsonPb.lookup('.berty.types.v1.GroupMetadataEvent'),
			GroupMessageEvent: jsonPb.lookup('.berty.types.v1.GroupMessageEvent'),
			GroupMetadataSubscribe: jsonPb.lookup('.berty.types.v1.GroupMetadataSubscribe'),
			GroupMetadataList: jsonPb.lookup('.berty.types.v1.GroupMetadataList'),
			GroupMessageSubscribe: jsonPb.lookup('.berty.types.v1.GroupMessageSubscribe'),
			GroupMessageList: jsonPb.lookup('.berty.types.v1.GroupMessageList'),
			GroupInfo: jsonPb.lookup('.berty.types.v1.GroupInfo'),
			ActivateGroup: jsonPb.lookup('.berty.types.v1.ActivateGroup'),
			DeactivateGroup: jsonPb.lookup('.berty.types.v1.DeactivateGroup'),
			DebugListGroups: jsonPb.lookup('.berty.types.v1.DebugListGroups'),
			DebugInspectGroupStore: jsonPb.lookup('.berty.types.v1.DebugInspectGroupStore'),
			DebugGroup: jsonPb.lookup('.berty.types.v1.DebugGroup'),
			DebugInspectGroupLogType: jsonPb.lookup('.berty.types.v1.DebugInspectGroupLogType'),
			ContactState: jsonPb.lookup('.berty.types.v1.ContactState'),
			ShareableContact: jsonPb.lookup('.berty.types.v1.ShareableContact'),
		},
	},
	messenger: {
		v1: {
			MessengerService: jsonPb.lookup('.berty.messenger.v1.MessengerService'),
			EchoTest: jsonPb.lookup('.berty.messenger.v1.EchoTest'),
			InstanceShareableBertyID: jsonPb.lookup('.berty.messenger.v1.InstanceShareableBertyID'),
			ShareableBertyGroup: jsonPb.lookup('.berty.messenger.v1.ShareableBertyGroup'),
			DevShareInstanceBertyID: jsonPb.lookup('.berty.messenger.v1.DevShareInstanceBertyID'),
			ParseDeepLink: jsonPb.lookup('.berty.messenger.v1.ParseDeepLink'),
			SendContactRequest: jsonPb.lookup('.berty.messenger.v1.SendContactRequest'),
			SendAck: jsonPb.lookup('.berty.messenger.v1.SendAck'),
			SendMessage: jsonPb.lookup('.berty.messenger.v1.SendMessage'),
			BertyID: jsonPb.lookup('.berty.messenger.v1.BertyID'),
			BertyGroup: jsonPb.lookup('.berty.messenger.v1.BertyGroup'),
			AppMessage: jsonPb.lookup('.berty.messenger.v1.AppMessage'),
			SystemInfo: jsonPb.lookup('.berty.messenger.v1.SystemInfo'),
			ConversationJoin: jsonPb.lookup('.berty.messenger.v1.ConversationJoin'),
			Account: jsonPb.lookup('.berty.messenger.v1.Account'),
			Interaction: jsonPb.lookup('.berty.messenger.v1.Interaction'),
			Contact: jsonPb.lookup('.berty.messenger.v1.Contact'),
			Conversation: jsonPb.lookup('.berty.messenger.v1.Conversation'),
			Member: jsonPb.lookup('.berty.messenger.v1.Member'),
			Device: jsonPb.lookup('.berty.messenger.v1.Device'),
			ContactMetadata: jsonPb.lookup('.berty.messenger.v1.ContactMetadata'),
			StreamEvent: jsonPb.lookup('.berty.messenger.v1.StreamEvent'),
			ConversationStream: jsonPb.lookup('.berty.messenger.v1.ConversationStream'),
			ConversationCreate: jsonPb.lookup('.berty.messenger.v1.ConversationCreate'),
			AccountGet: jsonPb.lookup('.berty.messenger.v1.AccountGet'),
			EventStream: jsonPb.lookup('.berty.messenger.v1.EventStream'),
			AccountUpdate: jsonPb.lookup('.berty.messenger.v1.AccountUpdate'),
			ContactRequest: jsonPb.lookup('.berty.messenger.v1.ContactRequest'),
			ContactAccept: jsonPb.lookup('.berty.messenger.v1.ContactAccept'),
			Interact: jsonPb.lookup('.berty.messenger.v1.Interact'),
		},
	},
}
export const gogoproto = {
	goprotoEnumPrefix: jsonPb.lookup('.gogoproto.goprotoEnumPrefix'),
	goprotoEnumStringer: jsonPb.lookup('.gogoproto.goprotoEnumStringer'),
	enumStringer: jsonPb.lookup('.gogoproto.enumStringer'),
	enumCustomname: jsonPb.lookup('.gogoproto.enumCustomname'),
	enumdecl: jsonPb.lookup('.gogoproto.enumdecl'),
	enumvalueCustomname: jsonPb.lookup('.gogoproto.enumvalueCustomname'),
	goprotoGettersAll: jsonPb.lookup('.gogoproto.goprotoGettersAll'),
	goprotoEnumPrefixAll: jsonPb.lookup('.gogoproto.goprotoEnumPrefixAll'),
	goprotoStringerAll: jsonPb.lookup('.gogoproto.goprotoStringerAll'),
	verboseEqualAll: jsonPb.lookup('.gogoproto.verboseEqualAll'),
	faceAll: jsonPb.lookup('.gogoproto.faceAll'),
	gostringAll: jsonPb.lookup('.gogoproto.gostringAll'),
	populateAll: jsonPb.lookup('.gogoproto.populateAll'),
	stringerAll: jsonPb.lookup('.gogoproto.stringerAll'),
	onlyoneAll: jsonPb.lookup('.gogoproto.onlyoneAll'),
	equalAll: jsonPb.lookup('.gogoproto.equalAll'),
	descriptionAll: jsonPb.lookup('.gogoproto.descriptionAll'),
	testgenAll: jsonPb.lookup('.gogoproto.testgenAll'),
	benchgenAll: jsonPb.lookup('.gogoproto.benchgenAll'),
	marshalerAll: jsonPb.lookup('.gogoproto.marshalerAll'),
	unmarshalerAll: jsonPb.lookup('.gogoproto.unmarshalerAll'),
	stableMarshalerAll: jsonPb.lookup('.gogoproto.stableMarshalerAll'),
	sizerAll: jsonPb.lookup('.gogoproto.sizerAll'),
	goprotoEnumStringerAll: jsonPb.lookup('.gogoproto.goprotoEnumStringerAll'),
	enumStringerAll: jsonPb.lookup('.gogoproto.enumStringerAll'),
	unsafeMarshalerAll: jsonPb.lookup('.gogoproto.unsafeMarshalerAll'),
	unsafeUnmarshalerAll: jsonPb.lookup('.gogoproto.unsafeUnmarshalerAll'),
	goprotoExtensionsMapAll: jsonPb.lookup('.gogoproto.goprotoExtensionsMapAll'),
	goprotoUnrecognizedAll: jsonPb.lookup('.gogoproto.goprotoUnrecognizedAll'),
	gogoprotoImport: jsonPb.lookup('.gogoproto.gogoprotoImport'),
	protosizerAll: jsonPb.lookup('.gogoproto.protosizerAll'),
	compareAll: jsonPb.lookup('.gogoproto.compareAll'),
	typedeclAll: jsonPb.lookup('.gogoproto.typedeclAll'),
	enumdeclAll: jsonPb.lookup('.gogoproto.enumdeclAll'),
	goprotoRegistration: jsonPb.lookup('.gogoproto.goprotoRegistration'),
	messagenameAll: jsonPb.lookup('.gogoproto.messagenameAll'),
	goprotoSizecacheAll: jsonPb.lookup('.gogoproto.goprotoSizecacheAll'),
	goprotoUnkeyedAll: jsonPb.lookup('.gogoproto.goprotoUnkeyedAll'),
	goprotoGetters: jsonPb.lookup('.gogoproto.goprotoGetters'),
	goprotoStringer: jsonPb.lookup('.gogoproto.goprotoStringer'),
	verboseEqual: jsonPb.lookup('.gogoproto.verboseEqual'),
	face: jsonPb.lookup('.gogoproto.face'),
	gostring: jsonPb.lookup('.gogoproto.gostring'),
	populate: jsonPb.lookup('.gogoproto.populate'),
	stringer: jsonPb.lookup('.gogoproto.stringer'),
	onlyone: jsonPb.lookup('.gogoproto.onlyone'),
	equal: jsonPb.lookup('.gogoproto.equal'),
	description: jsonPb.lookup('.gogoproto.description'),
	testgen: jsonPb.lookup('.gogoproto.testgen'),
	benchgen: jsonPb.lookup('.gogoproto.benchgen'),
	marshaler: jsonPb.lookup('.gogoproto.marshaler'),
	unmarshaler: jsonPb.lookup('.gogoproto.unmarshaler'),
	stableMarshaler: jsonPb.lookup('.gogoproto.stableMarshaler'),
	sizer: jsonPb.lookup('.gogoproto.sizer'),
	unsafeMarshaler: jsonPb.lookup('.gogoproto.unsafeMarshaler'),
	unsafeUnmarshaler: jsonPb.lookup('.gogoproto.unsafeUnmarshaler'),
	goprotoExtensionsMap: jsonPb.lookup('.gogoproto.goprotoExtensionsMap'),
	goprotoUnrecognized: jsonPb.lookup('.gogoproto.goprotoUnrecognized'),
	protosizer: jsonPb.lookup('.gogoproto.protosizer'),
	compare: jsonPb.lookup('.gogoproto.compare'),
	typedecl: jsonPb.lookup('.gogoproto.typedecl'),
	messagename: jsonPb.lookup('.gogoproto.messagename'),
	goprotoSizecache: jsonPb.lookup('.gogoproto.goprotoSizecache'),
	goprotoUnkeyed: jsonPb.lookup('.gogoproto.goprotoUnkeyed'),
	nullable: jsonPb.lookup('.gogoproto.nullable'),
	embed: jsonPb.lookup('.gogoproto.embed'),
	customtype: jsonPb.lookup('.gogoproto.customtype'),
	customname: jsonPb.lookup('.gogoproto.customname'),
	jsontag: jsonPb.lookup('.gogoproto.jsontag'),
	moretags: jsonPb.lookup('.gogoproto.moretags'),
	casttype: jsonPb.lookup('.gogoproto.casttype'),
	castkey: jsonPb.lookup('.gogoproto.castkey'),
	castvalue: jsonPb.lookup('.gogoproto.castvalue'),
	stdtime: jsonPb.lookup('.gogoproto.stdtime'),
	stdduration: jsonPb.lookup('.gogoproto.stdduration'),
	wktpointer: jsonPb.lookup('.gogoproto.wktpointer'),
}
export const google = {
	protobuf: {
		FileDescriptorSet: jsonPb.lookup('.google.protobuf.FileDescriptorSet'),
		FileDescriptorProto: jsonPb.lookup('.google.protobuf.FileDescriptorProto'),
		DescriptorProto: jsonPb.lookup('.google.protobuf.DescriptorProto'),
		ExtensionRangeOptions: jsonPb.lookup('.google.protobuf.ExtensionRangeOptions'),
		FieldDescriptorProto: jsonPb.lookup('.google.protobuf.FieldDescriptorProto'),
		OneofDescriptorProto: jsonPb.lookup('.google.protobuf.OneofDescriptorProto'),
		EnumDescriptorProto: jsonPb.lookup('.google.protobuf.EnumDescriptorProto'),
		EnumValueDescriptorProto: jsonPb.lookup('.google.protobuf.EnumValueDescriptorProto'),
		ServiceDescriptorProto: jsonPb.lookup('.google.protobuf.ServiceDescriptorProto'),
		MethodDescriptorProto: jsonPb.lookup('.google.protobuf.MethodDescriptorProto'),
		FileOptions: jsonPb.lookup('.google.protobuf.FileOptions'),
		MessageOptions: jsonPb.lookup('.google.protobuf.MessageOptions'),
		FieldOptions: jsonPb.lookup('.google.protobuf.FieldOptions'),
		OneofOptions: jsonPb.lookup('.google.protobuf.OneofOptions'),
		EnumOptions: jsonPb.lookup('.google.protobuf.EnumOptions'),
		EnumValueOptions: jsonPb.lookup('.google.protobuf.EnumValueOptions'),
		ServiceOptions: jsonPb.lookup('.google.protobuf.ServiceOptions'),
		MethodOptions: jsonPb.lookup('.google.protobuf.MethodOptions'),
		UninterpretedOption: jsonPb.lookup('.google.protobuf.UninterpretedOption'),
		SourceCodeInfo: jsonPb.lookup('.google.protobuf.SourceCodeInfo'),
		GeneratedCodeInfo: jsonPb.lookup('.google.protobuf.GeneratedCodeInfo'),
	},
}
