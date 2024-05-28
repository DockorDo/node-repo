#include <node.h>
#include <v8.h>
#include <stdlib.h>
#include <string>

using v8::HandleScope;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::Value;

static void Say(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();
    v8::HandleScope scope(isolate);
    if(args.Length() != 1 || !args[0]->IsString()){
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "param error").ToLocalChecked()));
        return;
    }
    
    v8::String::Utf8Value info(isolate, args[0]);
    std::string strinfo = *info;
    printf("%s\n",strinfo.c_str());
}

void init(v8::Local<v8::Object> target) {
    NODE_SET_METHOD(target, "say", Say);
}

NODE_MODULE(bingding,init);