/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const blend = $root.blend = (() => {

    /**
     * Namespace blend.
     * @exports blend
     * @namespace
     */
    const blend = {};

    blend.services = (function() {

        /**
         * Namespace services.
         * @memberof blend
         * @namespace
         */
        const services = {};

        services.user_creation = (function() {

            /**
             * Namespace user_creation.
             * @memberof blend.services
             * @namespace
             */
            const user_creation = {};

            user_creation.proto = (function() {

                /**
                 * Namespace proto.
                 * @memberof blend.services.user_creation
                 * @namespace
                 */
                const proto = {};

                /**
                 * StatusCode enum.
                 * @name blend.services.user_creation.proto.StatusCode
                 * @enum {number}
                 * @property {number} STATUS_CODE_OK=0 STATUS_CODE_OK value
                 * @property {number} STATUS_CODE_INTERNAL_ERROR=1 STATUS_CODE_INTERNAL_ERROR value
                 * @property {number} STATUS_CODE_INVALID_NUMBER=2 STATUS_CODE_INVALID_NUMBER value
                 * @property {number} STATUS_CODE_NUMBER_ALREADY_TAKEN=3 STATUS_CODE_NUMBER_ALREADY_TAKEN value
                 * @property {number} STATUS_CODE_UID_ALREADY_TAKEN=4 STATUS_CODE_UID_ALREADY_TAKEN value
                 * @property {number} STATUS_CODE_INVALID_UID=5 STATUS_CODE_INVALID_UID value
                 * @property {number} STATUS_CODE_INVALID_ACTION=6 STATUS_CODE_INVALID_ACTION value
                 * @property {number} STATUS_CODE_TXN_NOT_FOUND=7 STATUS_CODE_TXN_NOT_FOUND value
                 * @property {number} STATUS_CODE_INVALID_OTP=8 STATUS_CODE_INVALID_OTP value
                 * @property {number} STATUS_CODE_OTP_MISSING=9 STATUS_CODE_OTP_MISSING value
                 * @property {number} STATUS_CODE_USER_ALREADY_EXISTS=10 STATUS_CODE_USER_ALREADY_EXISTS value
                 */
                proto.StatusCode = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STATUS_CODE_OK"] = 0;
                    values[valuesById[1] = "STATUS_CODE_INTERNAL_ERROR"] = 1;
                    values[valuesById[2] = "STATUS_CODE_INVALID_NUMBER"] = 2;
                    values[valuesById[3] = "STATUS_CODE_NUMBER_ALREADY_TAKEN"] = 3;
                    values[valuesById[4] = "STATUS_CODE_UID_ALREADY_TAKEN"] = 4;
                    values[valuesById[5] = "STATUS_CODE_INVALID_UID"] = 5;
                    values[valuesById[6] = "STATUS_CODE_INVALID_ACTION"] = 6;
                    values[valuesById[7] = "STATUS_CODE_TXN_NOT_FOUND"] = 7;
                    values[valuesById[8] = "STATUS_CODE_INVALID_OTP"] = 8;
                    values[valuesById[9] = "STATUS_CODE_OTP_MISSING"] = 9;
                    values[valuesById[10] = "STATUS_CODE_USER_ALREADY_EXISTS"] = 10;
                    return values;
                })();

                proto.Action3Request = (function() {

                    /**
                     * Properties of an Action3Request.
                     * @memberof blend.services.user_creation.proto
                     * @interface IAction3Request
                     * @property {string|null} [uid] Action3Request uid
                     * @property {string|null} [email] Action3Request email
                     */

                    /**
                     * Constructs a new Action3Request.
                     * @memberof blend.services.user_creation.proto
                     * @classdesc Represents an Action3Request.
                     * @implements IAction3Request
                     * @constructor
                     * @param {blend.services.user_creation.proto.IAction3Request=} [properties] Properties to set
                     */
                    function Action3Request(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Action3Request uid.
                     * @member {string} uid
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @instance
                     */
                    Action3Request.prototype.uid = "";

                    /**
                     * Action3Request email.
                     * @member {string} email
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @instance
                     */
                    Action3Request.prototype.email = "";

                    /**
                     * Creates a new Action3Request instance using the specified properties.
                     * @function create
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {blend.services.user_creation.proto.IAction3Request=} [properties] Properties to set
                     * @returns {blend.services.user_creation.proto.Action3Request} Action3Request instance
                     */
                    Action3Request.create = function create(properties) {
                        return new Action3Request(properties);
                    };

                    /**
                     * Encodes the specified Action3Request message. Does not implicitly {@link blend.services.user_creation.proto.Action3Request.verify|verify} messages.
                     * @function encode
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {blend.services.user_creation.proto.IAction3Request} message Action3Request message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Action3Request.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
                        return writer;
                    };

                    /**
                     * Encodes the specified Action3Request message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Action3Request.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {blend.services.user_creation.proto.IAction3Request} message Action3Request message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Action3Request.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Action3Request message from the specified reader or buffer.
                     * @function decode
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {blend.services.user_creation.proto.Action3Request} Action3Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Action3Request.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blend.services.user_creation.proto.Action3Request();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.uid = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.email = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Action3Request message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {blend.services.user_creation.proto.Action3Request} Action3Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Action3Request.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Action3Request message.
                     * @function verify
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Action3Request.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            if (!$util.isString(message.uid))
                                return "uid: string expected";
                        if (message.email != null && message.hasOwnProperty("email"))
                            if (!$util.isString(message.email))
                                return "email: string expected";
                        return null;
                    };

                    /**
                     * Creates an Action3Request message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {blend.services.user_creation.proto.Action3Request} Action3Request
                     */
                    Action3Request.fromObject = function fromObject(object) {
                        if (object instanceof $root.blend.services.user_creation.proto.Action3Request)
                            return object;
                        let message = new $root.blend.services.user_creation.proto.Action3Request();
                        if (object.uid != null)
                            message.uid = String(object.uid);
                        if (object.email != null)
                            message.email = String(object.email);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Action3Request message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {blend.services.user_creation.proto.Action3Request} message Action3Request
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Action3Request.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.uid = "";
                            object.email = "";
                        }
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            object.uid = message.uid;
                        if (message.email != null && message.hasOwnProperty("email"))
                            object.email = message.email;
                        return object;
                    };

                    /**
                     * Converts this Action3Request to JSON.
                     * @function toJSON
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Action3Request.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Action3Request
                     * @function getTypeUrl
                     * @memberof blend.services.user_creation.proto.Action3Request
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Action3Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/blend.services.user_creation.proto.Action3Request";
                    };

                    return Action3Request;
                })();

                proto.Response = (function() {

                    /**
                     * Properties of a Response.
                     * @memberof blend.services.user_creation.proto
                     * @interface IResponse
                     * @property {boolean|null} [ok] Response ok
                     * @property {blend.services.user_creation.proto.StatusCode|null} [code] Response code
                     * @property {blend.services.user_creation.proto.IAction1Response|null} [action_1] Response action_1
                     * @property {Array.<blend.services.user_creation.proto.IError>|null} [errors] Response errors
                     */

                    /**
                     * Constructs a new Response.
                     * @memberof blend.services.user_creation.proto
                     * @classdesc Represents a Response.
                     * @implements IResponse
                     * @constructor
                     * @param {blend.services.user_creation.proto.IResponse=} [properties] Properties to set
                     */
                    function Response(properties) {
                        this.errors = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Response ok.
                     * @member {boolean} ok
                     * @memberof blend.services.user_creation.proto.Response
                     * @instance
                     */
                    Response.prototype.ok = false;

                    /**
                     * Response code.
                     * @member {blend.services.user_creation.proto.StatusCode} code
                     * @memberof blend.services.user_creation.proto.Response
                     * @instance
                     */
                    Response.prototype.code = 0;

                    /**
                     * Response action_1.
                     * @member {blend.services.user_creation.proto.IAction1Response|null|undefined} action_1
                     * @memberof blend.services.user_creation.proto.Response
                     * @instance
                     */
                    Response.prototype.action_1 = null;

                    /**
                     * Response errors.
                     * @member {Array.<blend.services.user_creation.proto.IError>} errors
                     * @memberof blend.services.user_creation.proto.Response
                     * @instance
                     */
                    Response.prototype.errors = $util.emptyArray;

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * Response data.
                     * @member {"action_1"|undefined} data
                     * @memberof blend.services.user_creation.proto.Response
                     * @instance
                     */
                    Object.defineProperty(Response.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["action_1"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Response instance using the specified properties.
                     * @function create
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {blend.services.user_creation.proto.IResponse=} [properties] Properties to set
                     * @returns {blend.services.user_creation.proto.Response} Response instance
                     */
                    Response.create = function create(properties) {
                        return new Response(properties);
                    };

                    /**
                     * Encodes the specified Response message. Does not implicitly {@link blend.services.user_creation.proto.Response.verify|verify} messages.
                     * @function encode
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {blend.services.user_creation.proto.IResponse} message Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Response.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                        if (message.action_1 != null && Object.hasOwnProperty.call(message, "action_1"))
                            $root.blend.services.user_creation.proto.Action1Response.encode(message.action_1, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.errors != null && message.errors.length)
                            for (let i = 0; i < message.errors.length; ++i)
                                $root.blend.services.user_creation.proto.Error.encode(message.errors[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Response message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Response.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {blend.services.user_creation.proto.IResponse} message Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Response.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Response message from the specified reader or buffer.
                     * @function decode
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {blend.services.user_creation.proto.Response} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Response.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blend.services.user_creation.proto.Response();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.ok = reader.bool();
                                    break;
                                }
                            case 2: {
                                    message.code = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.action_1 = $root.blend.services.user_creation.proto.Action1Response.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    if (!(message.errors && message.errors.length))
                                        message.errors = [];
                                    message.errors.push($root.blend.services.user_creation.proto.Error.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Response message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {blend.services.user_creation.proto.Response} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Response.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Response message.
                     * @function verify
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Response.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        let properties = {};
                        if (message.ok != null && message.hasOwnProperty("ok"))
                            if (typeof message.ok !== "boolean")
                                return "ok: boolean expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                                break;
                            }
                        if (message.action_1 != null && message.hasOwnProperty("action_1")) {
                            properties.data = 1;
                            {
                                let error = $root.blend.services.user_creation.proto.Action1Response.verify(message.action_1);
                                if (error)
                                    return "action_1." + error;
                            }
                        }
                        if (message.errors != null && message.hasOwnProperty("errors")) {
                            if (!Array.isArray(message.errors))
                                return "errors: array expected";
                            for (let i = 0; i < message.errors.length; ++i) {
                                let error = $root.blend.services.user_creation.proto.Error.verify(message.errors[i]);
                                if (error)
                                    return "errors." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Response message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {blend.services.user_creation.proto.Response} Response
                     */
                    Response.fromObject = function fromObject(object) {
                        if (object instanceof $root.blend.services.user_creation.proto.Response)
                            return object;
                        let message = new $root.blend.services.user_creation.proto.Response();
                        if (object.ok != null)
                            message.ok = Boolean(object.ok);
                        switch (object.code) {
                        default:
                            if (typeof object.code === "number") {
                                message.code = object.code;
                                break;
                            }
                            break;
                        case "STATUS_CODE_OK":
                        case 0:
                            message.code = 0;
                            break;
                        case "STATUS_CODE_INTERNAL_ERROR":
                        case 1:
                            message.code = 1;
                            break;
                        case "STATUS_CODE_INVALID_NUMBER":
                        case 2:
                            message.code = 2;
                            break;
                        case "STATUS_CODE_NUMBER_ALREADY_TAKEN":
                        case 3:
                            message.code = 3;
                            break;
                        case "STATUS_CODE_UID_ALREADY_TAKEN":
                        case 4:
                            message.code = 4;
                            break;
                        case "STATUS_CODE_INVALID_UID":
                        case 5:
                            message.code = 5;
                            break;
                        case "STATUS_CODE_INVALID_ACTION":
                        case 6:
                            message.code = 6;
                            break;
                        case "STATUS_CODE_TXN_NOT_FOUND":
                        case 7:
                            message.code = 7;
                            break;
                        case "STATUS_CODE_INVALID_OTP":
                        case 8:
                            message.code = 8;
                            break;
                        case "STATUS_CODE_OTP_MISSING":
                        case 9:
                            message.code = 9;
                            break;
                        case "STATUS_CODE_USER_ALREADY_EXISTS":
                        case 10:
                            message.code = 10;
                            break;
                        }
                        if (object.action_1 != null) {
                            if (typeof object.action_1 !== "object")
                                throw TypeError(".blend.services.user_creation.proto.Response.action_1: object expected");
                            message.action_1 = $root.blend.services.user_creation.proto.Action1Response.fromObject(object.action_1);
                        }
                        if (object.errors) {
                            if (!Array.isArray(object.errors))
                                throw TypeError(".blend.services.user_creation.proto.Response.errors: array expected");
                            message.errors = [];
                            for (let i = 0; i < object.errors.length; ++i) {
                                if (typeof object.errors[i] !== "object")
                                    throw TypeError(".blend.services.user_creation.proto.Response.errors: object expected");
                                message.errors[i] = $root.blend.services.user_creation.proto.Error.fromObject(object.errors[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Response message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {blend.services.user_creation.proto.Response} message Response
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Response.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.errors = [];
                        if (options.defaults) {
                            object.ok = false;
                            object.code = options.enums === String ? "STATUS_CODE_OK" : 0;
                        }
                        if (message.ok != null && message.hasOwnProperty("ok"))
                            object.ok = message.ok;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.blend.services.user_creation.proto.StatusCode[message.code] === undefined ? message.code : $root.blend.services.user_creation.proto.StatusCode[message.code] : message.code;
                        if (message.action_1 != null && message.hasOwnProperty("action_1")) {
                            object.action_1 = $root.blend.services.user_creation.proto.Action1Response.toObject(message.action_1, options);
                            if (options.oneofs)
                                object.data = "action_1";
                        }
                        if (message.errors && message.errors.length) {
                            object.errors = [];
                            for (let j = 0; j < message.errors.length; ++j)
                                object.errors[j] = $root.blend.services.user_creation.proto.Error.toObject(message.errors[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Response to JSON.
                     * @function toJSON
                     * @memberof blend.services.user_creation.proto.Response
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Response.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Response
                     * @function getTypeUrl
                     * @memberof blend.services.user_creation.proto.Response
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/blend.services.user_creation.proto.Response";
                    };

                    return Response;
                })();

                proto.Action1Response = (function() {

                    /**
                     * Properties of an Action1Response.
                     * @memberof blend.services.user_creation.proto
                     * @interface IAction1Response
                     * @property {string|null} [txnId] Action1Response txnId
                     * @property {string|null} [otp] Action1Response otp
                     */

                    /**
                     * Constructs a new Action1Response.
                     * @memberof blend.services.user_creation.proto
                     * @classdesc Represents an Action1Response.
                     * @implements IAction1Response
                     * @constructor
                     * @param {blend.services.user_creation.proto.IAction1Response=} [properties] Properties to set
                     */
                    function Action1Response(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Action1Response txnId.
                     * @member {string} txnId
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @instance
                     */
                    Action1Response.prototype.txnId = "";

                    /**
                     * Action1Response otp.
                     * @member {string} otp
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @instance
                     */
                    Action1Response.prototype.otp = "";

                    /**
                     * Creates a new Action1Response instance using the specified properties.
                     * @function create
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {blend.services.user_creation.proto.IAction1Response=} [properties] Properties to set
                     * @returns {blend.services.user_creation.proto.Action1Response} Action1Response instance
                     */
                    Action1Response.create = function create(properties) {
                        return new Action1Response(properties);
                    };

                    /**
                     * Encodes the specified Action1Response message. Does not implicitly {@link blend.services.user_creation.proto.Action1Response.verify|verify} messages.
                     * @function encode
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {blend.services.user_creation.proto.IAction1Response} message Action1Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Action1Response.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.txnId != null && Object.hasOwnProperty.call(message, "txnId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.txnId);
                        if (message.otp != null && Object.hasOwnProperty.call(message, "otp"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.otp);
                        return writer;
                    };

                    /**
                     * Encodes the specified Action1Response message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Action1Response.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {blend.services.user_creation.proto.IAction1Response} message Action1Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Action1Response.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Action1Response message from the specified reader or buffer.
                     * @function decode
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {blend.services.user_creation.proto.Action1Response} Action1Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Action1Response.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blend.services.user_creation.proto.Action1Response();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.txnId = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.otp = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Action1Response message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {blend.services.user_creation.proto.Action1Response} Action1Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Action1Response.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Action1Response message.
                     * @function verify
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Action1Response.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.txnId != null && message.hasOwnProperty("txnId"))
                            if (!$util.isString(message.txnId))
                                return "txnId: string expected";
                        if (message.otp != null && message.hasOwnProperty("otp"))
                            if (!$util.isString(message.otp))
                                return "otp: string expected";
                        return null;
                    };

                    /**
                     * Creates an Action1Response message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {blend.services.user_creation.proto.Action1Response} Action1Response
                     */
                    Action1Response.fromObject = function fromObject(object) {
                        if (object instanceof $root.blend.services.user_creation.proto.Action1Response)
                            return object;
                        let message = new $root.blend.services.user_creation.proto.Action1Response();
                        if (object.txnId != null)
                            message.txnId = String(object.txnId);
                        if (object.otp != null)
                            message.otp = String(object.otp);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Action1Response message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {blend.services.user_creation.proto.Action1Response} message Action1Response
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Action1Response.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.txnId = "";
                            object.otp = "";
                        }
                        if (message.txnId != null && message.hasOwnProperty("txnId"))
                            object.txnId = message.txnId;
                        if (message.otp != null && message.hasOwnProperty("otp"))
                            object.otp = message.otp;
                        return object;
                    };

                    /**
                     * Converts this Action1Response to JSON.
                     * @function toJSON
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Action1Response.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Action1Response
                     * @function getTypeUrl
                     * @memberof blend.services.user_creation.proto.Action1Response
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Action1Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/blend.services.user_creation.proto.Action1Response";
                    };

                    return Action1Response;
                })();

                proto.UserAlreadyExistsError = (function() {

                    /**
                     * Properties of a UserAlreadyExistsError.
                     * @memberof blend.services.user_creation.proto
                     * @interface IUserAlreadyExistsError
                     * @property {boolean|null} [uid] UserAlreadyExistsError uid
                     * @property {boolean|null} [phone] UserAlreadyExistsError phone
                     * @property {boolean|null} [email] UserAlreadyExistsError email
                     */

                    /**
                     * Constructs a new UserAlreadyExistsError.
                     * @memberof blend.services.user_creation.proto
                     * @classdesc Represents a UserAlreadyExistsError.
                     * @implements IUserAlreadyExistsError
                     * @constructor
                     * @param {blend.services.user_creation.proto.IUserAlreadyExistsError=} [properties] Properties to set
                     */
                    function UserAlreadyExistsError(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UserAlreadyExistsError uid.
                     * @member {boolean} uid
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @instance
                     */
                    UserAlreadyExistsError.prototype.uid = false;

                    /**
                     * UserAlreadyExistsError phone.
                     * @member {boolean} phone
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @instance
                     */
                    UserAlreadyExistsError.prototype.phone = false;

                    /**
                     * UserAlreadyExistsError email.
                     * @member {boolean} email
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @instance
                     */
                    UserAlreadyExistsError.prototype.email = false;

                    /**
                     * Creates a new UserAlreadyExistsError instance using the specified properties.
                     * @function create
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {blend.services.user_creation.proto.IUserAlreadyExistsError=} [properties] Properties to set
                     * @returns {blend.services.user_creation.proto.UserAlreadyExistsError} UserAlreadyExistsError instance
                     */
                    UserAlreadyExistsError.create = function create(properties) {
                        return new UserAlreadyExistsError(properties);
                    };

                    /**
                     * Encodes the specified UserAlreadyExistsError message. Does not implicitly {@link blend.services.user_creation.proto.UserAlreadyExistsError.verify|verify} messages.
                     * @function encode
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {blend.services.user_creation.proto.IUserAlreadyExistsError} message UserAlreadyExistsError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserAlreadyExistsError.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.uid);
                        if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.phone);
                        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.email);
                        return writer;
                    };

                    /**
                     * Encodes the specified UserAlreadyExistsError message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.UserAlreadyExistsError.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {blend.services.user_creation.proto.IUserAlreadyExistsError} message UserAlreadyExistsError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserAlreadyExistsError.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a UserAlreadyExistsError message from the specified reader or buffer.
                     * @function decode
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {blend.services.user_creation.proto.UserAlreadyExistsError} UserAlreadyExistsError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserAlreadyExistsError.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blend.services.user_creation.proto.UserAlreadyExistsError();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.uid = reader.bool();
                                    break;
                                }
                            case 2: {
                                    message.phone = reader.bool();
                                    break;
                                }
                            case 3: {
                                    message.email = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a UserAlreadyExistsError message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {blend.services.user_creation.proto.UserAlreadyExistsError} UserAlreadyExistsError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserAlreadyExistsError.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a UserAlreadyExistsError message.
                     * @function verify
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UserAlreadyExistsError.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            if (typeof message.uid !== "boolean")
                                return "uid: boolean expected";
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            if (typeof message.phone !== "boolean")
                                return "phone: boolean expected";
                        if (message.email != null && message.hasOwnProperty("email"))
                            if (typeof message.email !== "boolean")
                                return "email: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a UserAlreadyExistsError message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {blend.services.user_creation.proto.UserAlreadyExistsError} UserAlreadyExistsError
                     */
                    UserAlreadyExistsError.fromObject = function fromObject(object) {
                        if (object instanceof $root.blend.services.user_creation.proto.UserAlreadyExistsError)
                            return object;
                        let message = new $root.blend.services.user_creation.proto.UserAlreadyExistsError();
                        if (object.uid != null)
                            message.uid = Boolean(object.uid);
                        if (object.phone != null)
                            message.phone = Boolean(object.phone);
                        if (object.email != null)
                            message.email = Boolean(object.email);
                        return message;
                    };

                    /**
                     * Creates a plain object from a UserAlreadyExistsError message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {blend.services.user_creation.proto.UserAlreadyExistsError} message UserAlreadyExistsError
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UserAlreadyExistsError.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.uid = false;
                            object.phone = false;
                            object.email = false;
                        }
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            object.uid = message.uid;
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            object.phone = message.phone;
                        if (message.email != null && message.hasOwnProperty("email"))
                            object.email = message.email;
                        return object;
                    };

                    /**
                     * Converts this UserAlreadyExistsError to JSON.
                     * @function toJSON
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UserAlreadyExistsError.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for UserAlreadyExistsError
                     * @function getTypeUrl
                     * @memberof blend.services.user_creation.proto.UserAlreadyExistsError
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    UserAlreadyExistsError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/blend.services.user_creation.proto.UserAlreadyExistsError";
                    };

                    return UserAlreadyExistsError;
                })();

                proto.Error = (function() {

                    /**
                     * Properties of an Error.
                     * @memberof blend.services.user_creation.proto
                     * @interface IError
                     * @property {blend.services.user_creation.proto.IUserAlreadyExistsError|null} [userAlreayExists] Error userAlreayExists
                     */

                    /**
                     * Constructs a new Error.
                     * @memberof blend.services.user_creation.proto
                     * @classdesc Represents an Error.
                     * @implements IError
                     * @constructor
                     * @param {blend.services.user_creation.proto.IError=} [properties] Properties to set
                     */
                    function Error(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Error userAlreayExists.
                     * @member {blend.services.user_creation.proto.IUserAlreadyExistsError|null|undefined} userAlreayExists
                     * @memberof blend.services.user_creation.proto.Error
                     * @instance
                     */
                    Error.prototype.userAlreayExists = null;

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * Error value.
                     * @member {"userAlreayExists"|undefined} value
                     * @memberof blend.services.user_creation.proto.Error
                     * @instance
                     */
                    Object.defineProperty(Error.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["userAlreayExists"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Error instance using the specified properties.
                     * @function create
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {blend.services.user_creation.proto.IError=} [properties] Properties to set
                     * @returns {blend.services.user_creation.proto.Error} Error instance
                     */
                    Error.create = function create(properties) {
                        return new Error(properties);
                    };

                    /**
                     * Encodes the specified Error message. Does not implicitly {@link blend.services.user_creation.proto.Error.verify|verify} messages.
                     * @function encode
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {blend.services.user_creation.proto.IError} message Error message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Error.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userAlreayExists != null && Object.hasOwnProperty.call(message, "userAlreayExists"))
                            $root.blend.services.user_creation.proto.UserAlreadyExistsError.encode(message.userAlreayExists, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Error message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Error.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {blend.services.user_creation.proto.IError} message Error message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Error.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Error message from the specified reader or buffer.
                     * @function decode
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {blend.services.user_creation.proto.Error} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Error.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blend.services.user_creation.proto.Error();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.userAlreayExists = $root.blend.services.user_creation.proto.UserAlreadyExistsError.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Error message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {blend.services.user_creation.proto.Error} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Error.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Error message.
                     * @function verify
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Error.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        let properties = {};
                        if (message.userAlreayExists != null && message.hasOwnProperty("userAlreayExists")) {
                            properties.value = 1;
                            {
                                let error = $root.blend.services.user_creation.proto.UserAlreadyExistsError.verify(message.userAlreayExists);
                                if (error)
                                    return "userAlreayExists." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Error message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {blend.services.user_creation.proto.Error} Error
                     */
                    Error.fromObject = function fromObject(object) {
                        if (object instanceof $root.blend.services.user_creation.proto.Error)
                            return object;
                        let message = new $root.blend.services.user_creation.proto.Error();
                        if (object.userAlreayExists != null) {
                            if (typeof object.userAlreayExists !== "object")
                                throw TypeError(".blend.services.user_creation.proto.Error.userAlreayExists: object expected");
                            message.userAlreayExists = $root.blend.services.user_creation.proto.UserAlreadyExistsError.fromObject(object.userAlreayExists);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Error message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {blend.services.user_creation.proto.Error} message Error
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Error.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (message.userAlreayExists != null && message.hasOwnProperty("userAlreayExists")) {
                            object.userAlreayExists = $root.blend.services.user_creation.proto.UserAlreadyExistsError.toObject(message.userAlreayExists, options);
                            if (options.oneofs)
                                object.value = "userAlreayExists";
                        }
                        return object;
                    };

                    /**
                     * Converts this Error to JSON.
                     * @function toJSON
                     * @memberof blend.services.user_creation.proto.Error
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Error.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Error
                     * @function getTypeUrl
                     * @memberof blend.services.user_creation.proto.Error
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/blend.services.user_creation.proto.Error";
                    };

                    return Error;
                })();

                /**
                 * StageType enum.
                 * @name blend.services.user_creation.proto.StageType
                 * @enum {number}
                 * @property {number} STAGE_1=0 STAGE_1 value
                 * @property {number} STAGE_2=1 STAGE_2 value
                 * @property {number} STAGE_3=2 STAGE_3 value
                 * @property {number} STAGE_4=3 STAGE_4 value
                 */
                proto.StageType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STAGE_1"] = 0;
                    values[valuesById[1] = "STAGE_2"] = 1;
                    values[valuesById[2] = "STAGE_3"] = 2;
                    values[valuesById[3] = "STAGE_4"] = 3;
                    return values;
                })();

                proto.Stage = (function() {

                    /**
                     * Properties of a Stage.
                     * @memberof blend.services.user_creation.proto
                     * @interface IStage
                     * @property {blend.services.user_creation.proto.StageType|null} [stage] Stage stage
                     * @property {blend.services.user_creation.proto.IStage1|null} [stage_1] Stage stage_1
                     */

                    /**
                     * Constructs a new Stage.
                     * @memberof blend.services.user_creation.proto
                     * @classdesc Represents a Stage.
                     * @implements IStage
                     * @constructor
                     * @param {blend.services.user_creation.proto.IStage=} [properties] Properties to set
                     */
                    function Stage(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Stage stage.
                     * @member {blend.services.user_creation.proto.StageType} stage
                     * @memberof blend.services.user_creation.proto.Stage
                     * @instance
                     */
                    Stage.prototype.stage = 0;

                    /**
                     * Stage stage_1.
                     * @member {blend.services.user_creation.proto.IStage1|null|undefined} stage_1
                     * @memberof blend.services.user_creation.proto.Stage
                     * @instance
                     */
                    Stage.prototype.stage_1 = null;

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * Stage data.
                     * @member {"stage_1"|undefined} data
                     * @memberof blend.services.user_creation.proto.Stage
                     * @instance
                     */
                    Object.defineProperty(Stage.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["stage_1"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Stage instance using the specified properties.
                     * @function create
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {blend.services.user_creation.proto.IStage=} [properties] Properties to set
                     * @returns {blend.services.user_creation.proto.Stage} Stage instance
                     */
                    Stage.create = function create(properties) {
                        return new Stage(properties);
                    };

                    /**
                     * Encodes the specified Stage message. Does not implicitly {@link blend.services.user_creation.proto.Stage.verify|verify} messages.
                     * @function encode
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {blend.services.user_creation.proto.IStage} message Stage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Stage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.stage != null && Object.hasOwnProperty.call(message, "stage"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stage);
                        if (message.stage_1 != null && Object.hasOwnProperty.call(message, "stage_1"))
                            $root.blend.services.user_creation.proto.Stage1.encode(message.stage_1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Stage message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Stage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {blend.services.user_creation.proto.IStage} message Stage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Stage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Stage message from the specified reader or buffer.
                     * @function decode
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {blend.services.user_creation.proto.Stage} Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Stage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blend.services.user_creation.proto.Stage();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.stage = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.stage_1 = $root.blend.services.user_creation.proto.Stage1.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Stage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {blend.services.user_creation.proto.Stage} Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Stage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Stage message.
                     * @function verify
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Stage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        let properties = {};
                        if (message.stage != null && message.hasOwnProperty("stage"))
                            switch (message.stage) {
                            default:
                                return "stage: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.stage_1 != null && message.hasOwnProperty("stage_1")) {
                            properties.data = 1;
                            {
                                let error = $root.blend.services.user_creation.proto.Stage1.verify(message.stage_1);
                                if (error)
                                    return "stage_1." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Stage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {blend.services.user_creation.proto.Stage} Stage
                     */
                    Stage.fromObject = function fromObject(object) {
                        if (object instanceof $root.blend.services.user_creation.proto.Stage)
                            return object;
                        let message = new $root.blend.services.user_creation.proto.Stage();
                        switch (object.stage) {
                        default:
                            if (typeof object.stage === "number") {
                                message.stage = object.stage;
                                break;
                            }
                            break;
                        case "STAGE_1":
                        case 0:
                            message.stage = 0;
                            break;
                        case "STAGE_2":
                        case 1:
                            message.stage = 1;
                            break;
                        case "STAGE_3":
                        case 2:
                            message.stage = 2;
                            break;
                        case "STAGE_4":
                        case 3:
                            message.stage = 3;
                            break;
                        }
                        if (object.stage_1 != null) {
                            if (typeof object.stage_1 !== "object")
                                throw TypeError(".blend.services.user_creation.proto.Stage.stage_1: object expected");
                            message.stage_1 = $root.blend.services.user_creation.proto.Stage1.fromObject(object.stage_1);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Stage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {blend.services.user_creation.proto.Stage} message Stage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Stage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults)
                            object.stage = options.enums === String ? "STAGE_1" : 0;
                        if (message.stage != null && message.hasOwnProperty("stage"))
                            object.stage = options.enums === String ? $root.blend.services.user_creation.proto.StageType[message.stage] === undefined ? message.stage : $root.blend.services.user_creation.proto.StageType[message.stage] : message.stage;
                        if (message.stage_1 != null && message.hasOwnProperty("stage_1")) {
                            object.stage_1 = $root.blend.services.user_creation.proto.Stage1.toObject(message.stage_1, options);
                            if (options.oneofs)
                                object.data = "stage_1";
                        }
                        return object;
                    };

                    /**
                     * Converts this Stage to JSON.
                     * @function toJSON
                     * @memberof blend.services.user_creation.proto.Stage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Stage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Stage
                     * @function getTypeUrl
                     * @memberof blend.services.user_creation.proto.Stage
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Stage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/blend.services.user_creation.proto.Stage";
                    };

                    return Stage;
                })();

                proto.Stage1 = (function() {

                    /**
                     * Properties of a Stage1.
                     * @memberof blend.services.user_creation.proto
                     * @interface IStage1
                     * @property {string|null} [number] Stage1 number
                     * @property {string|null} [secret] Stage1 secret
                     */

                    /**
                     * Constructs a new Stage1.
                     * @memberof blend.services.user_creation.proto
                     * @classdesc Represents a Stage1.
                     * @implements IStage1
                     * @constructor
                     * @param {blend.services.user_creation.proto.IStage1=} [properties] Properties to set
                     */
                    function Stage1(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Stage1 number.
                     * @member {string} number
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @instance
                     */
                    Stage1.prototype.number = "";

                    /**
                     * Stage1 secret.
                     * @member {string} secret
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @instance
                     */
                    Stage1.prototype.secret = "";

                    /**
                     * Creates a new Stage1 instance using the specified properties.
                     * @function create
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {blend.services.user_creation.proto.IStage1=} [properties] Properties to set
                     * @returns {blend.services.user_creation.proto.Stage1} Stage1 instance
                     */
                    Stage1.create = function create(properties) {
                        return new Stage1(properties);
                    };

                    /**
                     * Encodes the specified Stage1 message. Does not implicitly {@link blend.services.user_creation.proto.Stage1.verify|verify} messages.
                     * @function encode
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {blend.services.user_creation.proto.IStage1} message Stage1 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Stage1.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.number);
                        if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secret);
                        return writer;
                    };

                    /**
                     * Encodes the specified Stage1 message, length delimited. Does not implicitly {@link blend.services.user_creation.proto.Stage1.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {blend.services.user_creation.proto.IStage1} message Stage1 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Stage1.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Stage1 message from the specified reader or buffer.
                     * @function decode
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {blend.services.user_creation.proto.Stage1} Stage1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Stage1.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blend.services.user_creation.proto.Stage1();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.number = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.secret = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Stage1 message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {blend.services.user_creation.proto.Stage1} Stage1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Stage1.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Stage1 message.
                     * @function verify
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Stage1.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.number != null && message.hasOwnProperty("number"))
                            if (!$util.isString(message.number))
                                return "number: string expected";
                        if (message.secret != null && message.hasOwnProperty("secret"))
                            if (!$util.isString(message.secret))
                                return "secret: string expected";
                        return null;
                    };

                    /**
                     * Creates a Stage1 message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {blend.services.user_creation.proto.Stage1} Stage1
                     */
                    Stage1.fromObject = function fromObject(object) {
                        if (object instanceof $root.blend.services.user_creation.proto.Stage1)
                            return object;
                        let message = new $root.blend.services.user_creation.proto.Stage1();
                        if (object.number != null)
                            message.number = String(object.number);
                        if (object.secret != null)
                            message.secret = String(object.secret);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Stage1 message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {blend.services.user_creation.proto.Stage1} message Stage1
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Stage1.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.number = "";
                            object.secret = "";
                        }
                        if (message.number != null && message.hasOwnProperty("number"))
                            object.number = message.number;
                        if (message.secret != null && message.hasOwnProperty("secret"))
                            object.secret = message.secret;
                        return object;
                    };

                    /**
                     * Converts this Stage1 to JSON.
                     * @function toJSON
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Stage1.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Stage1
                     * @function getTypeUrl
                     * @memberof blend.services.user_creation.proto.Stage1
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Stage1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/blend.services.user_creation.proto.Stage1";
                    };

                    return Stage1;
                })();

                return proto;
            })();

            return user_creation;
        })();

        return services;
    })();

    return blend;
})();

export { $root as default };
