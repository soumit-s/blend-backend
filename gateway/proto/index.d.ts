import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace blend. */
export namespace blend {

    /** Namespace services. */
    namespace services {

        /** Namespace user_creation. */
        namespace user_creation {

            /** Namespace proto. */
            namespace proto {

                /** StatusCode enum. */
                enum StatusCode {
                    STATUS_CODE_OK = 0,
                    STATUS_CODE_INTERNAL_ERROR = 1,
                    STATUS_CODE_INVALID_NUMBER = 2,
                    STATUS_CODE_NUMBER_ALREADY_TAKEN = 3,
                    STATUS_CODE_UID_ALREADY_TAKEN = 4,
                    STATUS_CODE_INVALID_UID = 5,
                    STATUS_CODE_INVALID_ACTION = 6,
                    STATUS_CODE_TXN_NOT_FOUND = 7,
                    STATUS_CODE_INVALID_OTP = 8,
                    STATUS_CODE_OTP_MISSING = 9
                }

                /** Properties of an Action3Request. */
                interface IAction3Request {

                    /** Action3Request uid */
                    uid?: (string|null);

                    /** Action3Request email */
                    email?: (string|null);
                }

                /** Represents an Action3Request. */
                class Action3Request implements IAction3Request {

                    /**
                     * Constructs a new Action3Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: blend.services.user_creation.proto.IAction3Request);

                    /** Action3Request uid. */
                    public uid: string;

                    /** Action3Request email. */
                    public email: string;

                    /**
                     * Creates a new Action3Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Action3Request instance
                     */
                    public static create(properties?: blend.services.user_creation.proto.IAction3Request): blend.services.user_creation.proto.Action3Request;

                    /**
                     * Encodes the specified Action3Request message. Does not implicitly {@link blend.services.user_creation.proto.Action3Request.verify|verify} messages.
                     * @param message Action3Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: blend.services.user_creation.proto.IAction3Request, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Action3Request message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Action3Request.verify|verify} messages.
                     * @param message Action3Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: blend.services.user_creation.proto.IAction3Request, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Action3Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Action3Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blend.services.user_creation.proto.Action3Request;

                    /**
                     * Decodes an Action3Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Action3Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blend.services.user_creation.proto.Action3Request;

                    /**
                     * Verifies an Action3Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Action3Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Action3Request
                     */
                    public static fromObject(object: { [k: string]: any }): blend.services.user_creation.proto.Action3Request;

                    /**
                     * Creates a plain object from an Action3Request message. Also converts values to other types if specified.
                     * @param message Action3Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: blend.services.user_creation.proto.Action3Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Action3Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Action3Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Response. */
                interface IResponse {

                    /** Response ok */
                    ok?: (boolean|null);

                    /** Response code */
                    code?: (blend.services.user_creation.proto.StatusCode|null);

                    /** Response action_1 */
                    action_1?: (blend.services.user_creation.proto.IAction1Response|null);
                }

                /** Represents a Response. */
                class Response implements IResponse {

                    /**
                     * Constructs a new Response.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: blend.services.user_creation.proto.IResponse);

                    /** Response ok. */
                    public ok: boolean;

                    /** Response code. */
                    public code: blend.services.user_creation.proto.StatusCode;

                    /** Response action_1. */
                    public action_1?: (blend.services.user_creation.proto.IAction1Response|null);

                    /** Response data. */
                    public data?: "action_1";

                    /**
                     * Creates a new Response instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Response instance
                     */
                    public static create(properties?: blend.services.user_creation.proto.IResponse): blend.services.user_creation.proto.Response;

                    /**
                     * Encodes the specified Response message. Does not implicitly {@link blend.services.user_creation.proto.Response.verify|verify} messages.
                     * @param message Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: blend.services.user_creation.proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Response message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Response.verify|verify} messages.
                     * @param message Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: blend.services.user_creation.proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Response message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blend.services.user_creation.proto.Response;

                    /**
                     * Decodes a Response message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blend.services.user_creation.proto.Response;

                    /**
                     * Verifies a Response message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Response message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Response
                     */
                    public static fromObject(object: { [k: string]: any }): blend.services.user_creation.proto.Response;

                    /**
                     * Creates a plain object from a Response message. Also converts values to other types if specified.
                     * @param message Response
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: blend.services.user_creation.proto.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Response to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Response
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Action1Response. */
                interface IAction1Response {

                    /** Action1Response txnId */
                    txnId?: (string|null);

                    /** Action1Response otp */
                    otp?: (string|null);
                }

                /** Represents an Action1Response. */
                class Action1Response implements IAction1Response {

                    /**
                     * Constructs a new Action1Response.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: blend.services.user_creation.proto.IAction1Response);

                    /** Action1Response txnId. */
                    public txnId: string;

                    /** Action1Response otp. */
                    public otp: string;

                    /**
                     * Creates a new Action1Response instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Action1Response instance
                     */
                    public static create(properties?: blend.services.user_creation.proto.IAction1Response): blend.services.user_creation.proto.Action1Response;

                    /**
                     * Encodes the specified Action1Response message. Does not implicitly {@link blend.services.user_creation.proto.Action1Response.verify|verify} messages.
                     * @param message Action1Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: blend.services.user_creation.proto.IAction1Response, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Action1Response message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Action1Response.verify|verify} messages.
                     * @param message Action1Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: blend.services.user_creation.proto.IAction1Response, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Action1Response message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Action1Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blend.services.user_creation.proto.Action1Response;

                    /**
                     * Decodes an Action1Response message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Action1Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blend.services.user_creation.proto.Action1Response;

                    /**
                     * Verifies an Action1Response message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Action1Response message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Action1Response
                     */
                    public static fromObject(object: { [k: string]: any }): blend.services.user_creation.proto.Action1Response;

                    /**
                     * Creates a plain object from an Action1Response message. Also converts values to other types if specified.
                     * @param message Action1Response
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: blend.services.user_creation.proto.Action1Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Action1Response to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Action1Response
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** StageType enum. */
                enum StageType {
                    STAGE_1 = 0,
                    STAGE_2 = 1,
                    STAGE_3 = 2,
                    STAGE_4 = 3
                }

                /** Properties of a Stage. */
                interface IStage {

                    /** Stage stage */
                    stage?: (blend.services.user_creation.proto.StageType|null);

                    /** Stage stage_1 */
                    stage_1?: (blend.services.user_creation.proto.IStage1|null);
                }

                /** Represents a Stage. */
                class Stage implements IStage {

                    /**
                     * Constructs a new Stage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: blend.services.user_creation.proto.IStage);

                    /** Stage stage. */
                    public stage: blend.services.user_creation.proto.StageType;

                    /** Stage stage_1. */
                    public stage_1?: (blend.services.user_creation.proto.IStage1|null);

                    /** Stage data. */
                    public data?: "stage_1";

                    /**
                     * Creates a new Stage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stage instance
                     */
                    public static create(properties?: blend.services.user_creation.proto.IStage): blend.services.user_creation.proto.Stage;

                    /**
                     * Encodes the specified Stage message. Does not implicitly {@link blend.services.user_creation.proto.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: blend.services.user_creation.proto.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stage message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: blend.services.user_creation.proto.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blend.services.user_creation.proto.Stage;

                    /**
                     * Decodes a Stage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blend.services.user_creation.proto.Stage;

                    /**
                     * Verifies a Stage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stage
                     */
                    public static fromObject(object: { [k: string]: any }): blend.services.user_creation.proto.Stage;

                    /**
                     * Creates a plain object from a Stage message. Also converts values to other types if specified.
                     * @param message Stage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: blend.services.user_creation.proto.Stage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Stage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Stage1. */
                interface IStage1 {

                    /** Stage1 number */
                    number?: (string|null);

                    /** Stage1 secret */
                    secret?: (string|null);
                }

                /** Represents a Stage1. */
                class Stage1 implements IStage1 {

                    /**
                     * Constructs a new Stage1.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: blend.services.user_creation.proto.IStage1);

                    /** Stage1 number. */
                    public number: string;

                    /** Stage1 secret. */
                    public secret: string;

                    /**
                     * Creates a new Stage1 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stage1 instance
                     */
                    public static create(properties?: blend.services.user_creation.proto.IStage1): blend.services.user_creation.proto.Stage1;

                    /**
                     * Encodes the specified Stage1 message. Does not implicitly {@link blend.services.user_creation.proto.Stage1.verify|verify} messages.
                     * @param message Stage1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: blend.services.user_creation.proto.IStage1, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stage1 message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Stage1.verify|verify} messages.
                     * @param message Stage1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: blend.services.user_creation.proto.IStage1, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stage1 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stage1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blend.services.user_creation.proto.Stage1;

                    /**
                     * Decodes a Stage1 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stage1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blend.services.user_creation.proto.Stage1;

                    /**
                     * Verifies a Stage1 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stage1 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stage1
                     */
                    public static fromObject(object: { [k: string]: any }): blend.services.user_creation.proto.Stage1;

                    /**
                     * Creates a plain object from a Stage1 message. Also converts values to other types if specified.
                     * @param message Stage1
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: blend.services.user_creation.proto.Stage1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stage1 to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Stage1
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}
