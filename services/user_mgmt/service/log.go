package service

import "log"

type Logger struct {
	Prefix string
}

func NewLogger(prefix string) Logger {
	return Logger{prefix}
}

func (s *Logger) Log(args ...any) {
	for _, arg := range args {
		log.Printf("%v %v", s.Prefix, arg)
	}
}

func (s *Logger) Logf(format string, args ...any) {
	log.Printf(s.Prefix+" "+format, args...)
}

// LogOK is used to log success messages.
func (s *Logger) LogOK(fmt string, v ...any) {
	s.Logf("[ OK ] "+fmt, v...)
}

// LogERR is used to log errors.
func (s *Logger) LogERR(fmt string, v ...any) {
	s.Logf("[ ERR ] "+fmt, v...)
}

// LogINFO is used to log useful information.
func (s *Logger) LogINFO(fmt string, v ...any) {
	s.Logf("[ INFO ] "+fmt, v...)
}

// LogWARN is used to log warnings.
func (s *Logger) LogWARN(fmt string, v ...any) {
	s.Logf("[ WARN ] "+fmt, v...)
}
