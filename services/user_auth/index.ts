import { Service } from '@/service/index.js'

const service = new Service()

// Initialize the service.
await service.init();

// Start the service.

// Add hook for shutdown.
process.on('SIGINT', async () => {
    service.logInfo('gracefully shutting down service')
    // Stop the service.
    await service.stop()
});

// Wait for the service to finish.
await service.running()
service.logInfo('service has successfully shutdown')

