import subprocess
import atexit
import os


def wrap_command_for_diff_shell(cmd: str):
    if os.name == "posix":
        return [f"xterm -hold -e \"{cmd}\""]
    else:
        pass


# App class.
class A:
    def start_user_creation_service(self):
        """Starts the user creation service"""
        print("spinning up the user-creation-service ...")
        self._user_creation_process = subprocess.Popen(
            wrap_command_for_diff_shell("cd services/user_creation && air"), shell=True
        )
    
    def start_user_mgmt_service(self):
        """Starts the user management service"""
        print("spinning up the user managemenet service ...")
        self._user_mgmt_process = subprocess.Popen(
            wrap_command_for_diff_shell("cd services/user_mgmt && air"),
            shell=True
        )

    def start_gateway(self):
        """Starts the gateway"""
        print("spinning up the gateway process ...")
        self._gateway_process = subprocess.Popen(
            wrap_command_for_diff_shell("cd gateway && npm run dev"),
            shell=True,
        )

    def start(self):
        self.start_user_mgmt_service()
        self.start_user_creation_service()
        self.start_gateway()

    def shutdown(self):
        if self._gateway_process.poll() is None:
            print(f"waiting for 'gateway' to finish ...")
            rcode = self._gateway_process.wait()
            print(f"'gateway' exited with code: {rcode}")

        if self._user_creation_process.poll() is None:
            print(f"waiting for 'use-creation-service' to finish ...")
            rcode = self._user_creation_process.wait()
            print(f"'user-creation-service' exited with code: {rcode}")
        
        if self._user_mgmt_process.poll() is None:
            print(f"waiting for the user-mgmt service to finish ...")
            rcode = self._user_mgmt_process.wait()
            print(f"user-mgmt service exited with code: {rcode}")


def main():
    app = A()
    app.start()

    @atexit.register
    def shutdown():
        app.shutdown()


if __name__ == "__main__":
    main()
